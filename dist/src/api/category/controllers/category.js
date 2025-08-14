"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController('api::category.category', ({ strapi }) => ({
    // Override default find method to include children and parent
    async find(ctx) {
        const { query } = ctx;
        const entity = await strapi.entityService.findMany('api::category.category', {
            ...query,
            populate: {
                image: true,
                parentCategory: true,
                childCategories: {
                    populate: {
                        image: true
                    }
                }
            },
            sort: 'order:asc'
        });
        return this.transformResponse(entity);
    },
    // Override default findOne method
    async findOne(ctx) {
        const { id } = ctx.params;
        const { query } = ctx;
        const entity = await strapi.entityService.findOne('api::category.category', id, {
            ...query,
            populate: {
                image: true,
                parentCategory: true,
                childCategories: {
                    populate: {
                        image: true
                    }
                }
            },
        });
        return this.transformResponse(entity);
    },
    // Custom endpoint to find category by slug
    async findBySlug(ctx) {
        const { slug } = ctx.params;
        const entity = await strapi.entityService.findMany('api::category.category', {
            filters: { slug: { $eq: slug } },
            populate: {
                image: true,
                parentCategory: true,
                childCategories: {
                    populate: {
                        image: true
                    }
                }
            },
        });
        if (entity.length === 0) {
            return ctx.notFound('Category not found');
        }
        return this.transformResponse(entity[0]);
    },
    // Get root categories (no parent)
    async findRootCategories(ctx) {
        const { query } = ctx;
        const entity = await strapi.entityService.findMany('api::category.category', {
            ...query,
            filters: {
                parentCategory: null
            },
            populate: {
                image: true,
                childCategories: {
                    populate: {
                        image: true
                    }
                }
            },
            sort: 'order:asc'
        });
        return this.transformResponse(entity);
    },
    // Get featured categories
    async findFeatured(ctx) {
        const { query } = ctx;
        const entity = await strapi.entityService.findMany('api::category.category', {
            ...query,
            filters: {
                isFeatured: true,
                isActive: true
            },
            populate: {
                image: true,
                parentCategory: true
            },
            sort: 'order:asc'
        });
        return this.transformResponse(entity);
    },
    // Create category
    async create(ctx) {
        const entity = await strapi.entityService.create('api::category.category', ctx.request.body);
        return this.transformResponse(entity);
    },
    // Update category
    async update(ctx) {
        const { id } = ctx.params;
        const entity = await strapi.entityService.update('api::category.category', id, ctx.request.body);
        return this.transformResponse(entity);
    }
}));
