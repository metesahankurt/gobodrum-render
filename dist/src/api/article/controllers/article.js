"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController('api::article.article', ({ strapi }) => ({
    // Override default find method to populate relations
    async find(ctx) {
        const { query } = ctx;
        const entity = await strapi.entityService.findMany('api::article.article', {
            ...query,
            populate: {
                featuredImage: true,
                gallery: true,
                author: true,
                categories: {
                    populate: {
                        image: true
                    }
                },
                tags: true,
                socialImage: true
            },
            sort: 'publishDate:desc'
        });
        return this.transformResponse(entity);
    },
    // Override default findOne method to populate relations
    async findOne(ctx) {
        const { id } = ctx.params;
        const { query } = ctx;
        const entity = await strapi.entityService.findOne('api::article.article', id, {
            ...query,
            populate: {
                featuredImage: true,
                gallery: true,
                author: true,
                categories: {
                    populate: {
                        image: true
                    }
                },
                tags: true,
                relatedArticles: {
                    populate: {
                        featuredImage: true,
                        author: true,
                        categories: true
                    }
                },
                socialImage: true
            },
        });
        // Increment view count
        if (entity) {
            await strapi.entityService.update('api::article.article', id, {
                data: { viewCount: (entity.viewCount || 0) + 1 }
            });
        }
        return this.transformResponse(entity);
    },
    // Custom endpoint to find article by slug
    async findBySlug(ctx) {
        const { slug } = ctx.params;
        const entity = await strapi.entityService.findMany('api::article.article', {
            filters: { slug: { $eq: slug } },
            populate: {
                featuredImage: true,
                gallery: true,
                author: true,
                categories: {
                    populate: {
                        image: true
                    }
                },
                tags: true,
                relatedArticles: {
                    populate: {
                        featuredImage: true,
                        author: true,
                        categories: true
                    }
                },
                socialImage: true
            },
        });
        if (entity.length === 0) {
            return ctx.notFound('Article not found');
        }
        // Increment view count
        await strapi.entityService.update('api::article.article', entity[0].id, {
            data: { viewCount: (entity[0].viewCount || 0) + 1 }
        });
        return this.transformResponse(entity[0]);
    },
    // Find articles by category
    async findByCategory(ctx) {
        const { categorySlug } = ctx.params;
        const { query } = ctx;
        const category = await strapi.entityService.findMany('api::category.category', {
            filters: { slug: { $eq: categorySlug } }
        });
        if (category.length === 0) {
            return ctx.notFound('Category not found');
        }
        const articles = await strapi.entityService.findMany('api::article.article', {
            ...query,
            filters: {
                categories: { id: { $eq: category[0].id } },
                publishedAt: { $notNull: true }
            },
            populate: {
                featuredImage: true,
                author: true,
                categories: {
                    populate: {
                        image: true
                    }
                },
                tags: true
            },
            sort: 'publishDate:desc'
        });
        return this.transformResponse(articles);
    },
    // Find articles by tag
    async findByTag(ctx) {
        const { tagSlug } = ctx.params;
        const { query } = ctx;
        const tag = await strapi.entityService.findMany('api::tag.tag', {
            filters: { slug: { $eq: tagSlug } }
        });
        if (tag.length === 0) {
            return ctx.notFound('Tag not found');
        }
        const articles = await strapi.entityService.findMany('api::article.article', {
            ...query,
            filters: {
                tags: { id: { $eq: tag[0].id } },
                publishedAt: { $notNull: true }
            },
            populate: {
                featuredImage: true,
                author: true,
                categories: true,
                tags: true
            },
            sort: 'publishDate:desc'
        });
        return this.transformResponse(articles);
    },
    // Get featured articles
    async findFeatured(ctx) {
        const { query } = ctx;
        const entity = await strapi.entityService.findMany('api::article.article', {
            ...query,
            filters: {
                isFeatured: true,
                publishedAt: { $notNull: true }
            },
            populate: {
                featuredImage: true,
                author: true,
                categories: true,
                tags: true
            },
            sort: 'publishDate:desc'
        });
        return this.transformResponse(entity);
    },
    // Get sticky articles
    async findSticky(ctx) {
        const { query } = ctx;
        const entity = await strapi.entityService.findMany('api::article.article', {
            ...query,
            filters: {
                isSticky: true,
                publishedAt: { $notNull: true }
            },
            populate: {
                featuredImage: true,
                author: true,
                categories: true,
                tags: true
            },
            sort: 'publishDate:desc'
        });
        return this.transformResponse(entity);
    },
    // Get popular articles (by views)
    async findPopular(ctx) {
        const { query } = ctx;
        const limit = Number(query.limit) || 10;
        const entity = await strapi.entityService.findMany('api::article.article', {
            filters: {
                publishedAt: { $notNull: true }
            },
            populate: {
                featuredImage: true,
                author: true,
                categories: true,
                tags: true
            },
            sort: 'viewCount:desc',
            limit
        });
        return this.transformResponse(entity);
    },
    // Search articles
    async search(ctx) {
        const { q } = ctx.query;
        const { query } = ctx;
        if (!q) {
            return ctx.badRequest('Search query is required');
        }
        const searchTerm = String(q);
        const entity = await strapi.entityService.findMany('api::article.article', {
            ...query,
            filters: {
                $or: [
                    { title: { $containsi: searchTerm } },
                    { content: { $containsi: searchTerm } },
                    { excerpt: { $containsi: searchTerm } },
                    { seoKeywords: { $containsi: searchTerm } }
                ],
                publishedAt: { $notNull: true }
            },
            populate: {
                featuredImage: true,
                author: true,
                categories: true,
                tags: true
            },
            sort: 'publishDate:desc'
        });
        return this.transformResponse(entity);
    },
    // Create article
    async create(ctx) {
        const entity = await strapi.entityService.create('api::article.article', ctx.request.body);
        return this.transformResponse(entity);
    },
    // Find article by route section and article slug
    async findByRouteSection(ctx) {
        const { articleSlug } = ctx.params;
        const { query } = ctx;
        // Extract route section from path and validate it's a valid enumeration value
        const pathSection = ctx.request.path.split('/')[2]; // /api/discover/slug -> 'discover'
        const validSections = [
            'discover', 'things-to-do', 'stay', 'dining', 'shopping', 'events', 'explore'
        ];
        const routeSection = validSections.includes(pathSection) ? pathSection : 'discover';
        // If no articleSlug provided, return articles for this section
        if (!articleSlug) {
            const entities = await strapi.entityService.findMany('api::article.article', {
                ...query,
                filters: {
                    routeSection: { $eq: routeSection }
                },
                populate: {
                    featuredImage: true,
                    author: true,
                    categories: {
                        populate: {
                            image: true
                        }
                    },
                    tags: true
                },
                sort: 'publishDate:desc'
            });
            return this.transformResponse(entities);
        }
        // Find specific article in this route section
        const entity = await strapi.entityService.findMany('api::article.article', {
            ...query,
            filters: {
                slug: { $eq: articleSlug },
                routeSection: { $eq: routeSection }
            },
            populate: {
                featuredImage: true,
                gallery: true,
                author: true,
                categories: {
                    populate: {
                        image: true
                    }
                },
                tags: true,
                relatedArticles: {
                    populate: {
                        featuredImage: true,
                        author: true,
                        categories: true
                    }
                },
                socialImage: true
            },
            limit: 1
        });
        if (entity.length === 0) {
            return ctx.notFound('Article not found in this section');
        }
        return this.transformResponse(entity[0]);
    },
    // Keep the old method for backward compatibility
    async findByCategoryAndSlug(ctx) {
        const { articleSlug } = ctx.params;
        const { query } = ctx;
        // Extract category slug from path
        const categorySlug = ctx.request.path.split('/')[2]; // /api/discover/slug -> 'discover'
        // First find the category
        const category = await strapi.entityService.findMany('api::category.category', {
            filters: { slug: { $eq: categorySlug } },
            limit: 1
        });
        if (category.length === 0) {
            return ctx.notFound('Category not found');
        }
        // Then find the article in that category
        const entity = await strapi.entityService.findMany('api::article.article', {
            ...query,
            filters: {
                slug: { $eq: articleSlug },
                categories: { id: { $eq: category[0].id } }
                // Remove publishedAt filter for now to debug
            },
            populate: {
                featuredImage: true,
                gallery: true,
                author: true,
                categories: {
                    populate: {
                        image: true
                    }
                },
                tags: true,
                relatedArticles: {
                    populate: {
                        featuredImage: true,
                        author: true,
                        categories: true
                    }
                },
                socialImage: true
            },
            limit: 1
        });
        if (entity.length === 0) {
            return ctx.notFound('Article not found');
        }
        return this.transformResponse(entity[0]);
    }
}));
