"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController('api::hotel.hotel', ({ strapi }) => ({
    // Override find with relations
    async find(ctx) {
        const { query } = ctx;
        const entity = await strapi.entityService.findMany('api::hotel.hotel', {
            ...query,
            populate: {
                images: true,
                featuredImage: true,
                categories: true,
                tags: true,
                socialImage: true
            },
            filters: {
                isActive: true
            },
            sort: 'averageRating:desc'
        });
        return this.transformResponse(entity);
    },
    // Override findOne with relations
    async findOne(ctx) {
        const { id } = ctx.params;
        const { query } = ctx;
        const entity = await strapi.entityService.findOne('api::hotel.hotel', id, {
            ...query,
            populate: {
                images: true,
                featuredImage: true,
                categories: true,
                tags: true,
                socialImage: true
            },
        });
        // Increment view count
        if (entity) {
            await strapi.entityService.update('api::hotel.hotel', id, {
                data: { viewCount: entity.viewCount + 1 }
            });
        }
        return this.transformResponse(entity);
    },
    // Find hotel by slug
    async findBySlug(ctx) {
        const { slug } = ctx.params;
        const entity = await strapi.entityService.findMany('api::hotel.hotel', {
            filters: { slug: { $eq: slug }, isActive: true },
            populate: {
                images: true,
                featuredImage: true,
                categories: true,
                tags: true,
                socialImage: true
            },
        });
        if (entity.length === 0) {
            return ctx.notFound('Hotel not found');
        }
        // Increment view count
        await strapi.entityService.update('api::hotel.hotel', entity[0].id, {
            data: { viewCount: entity[0].viewCount + 1 }
        });
        return this.transformResponse(entity[0]);
    },
    // Get featured hotels
    async findFeatured(ctx) {
        const { query } = ctx;
        const entity = await strapi.entityService.findMany('api::hotel.hotel', {
            ...query,
            filters: {
                isFeatured: true,
                isActive: true
            },
            populate: {
                images: true,
                featuredImage: true,
                categories: true,
                tags: true
            },
            sort: 'averageRating:desc'
        });
        return this.transformResponse(entity);
    },
    // Search hotels
    async search(ctx) {
        const { q } = ctx.query;
        const { query } = ctx;
        if (!q) {
            return ctx.badRequest('Search query is required');
        }
        const searchTerm = String(q);
        const entity = await strapi.entityService.findMany('api::hotel.hotel', {
            ...query,
            filters: {
                $or: [
                    { name: { $containsi: searchTerm } },
                    { description: { $containsi: searchTerm } },
                    { address: { $containsi: searchTerm } }
                ],
                isActive: true
            },
            populate: {
                featuredImage: true,
                categories: true,
                tags: true
            },
            sort: 'averageRating:desc'
        });
        return this.transformResponse(entity);
    }
}));
