import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::tag.tag', ({ strapi }) => ({
  // Override default find method
  async find(ctx) {
    const { query } = ctx;
    
    const entity = await strapi.entityService.findMany('api::tag.tag', {
      ...query,
      sort: 'usageCount:desc'
    });

    return this.transformResponse(entity);
  },

  // Find tag by slug
  async findBySlug(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.entityService.findMany('api::tag.tag', {
      filters: { slug: { $eq: slug } }
    });

    if (entity.length === 0) {
      return ctx.notFound('Tag not found');
    }

    return this.transformResponse(entity[0]);
  },

  // Get popular tags
  async findPopular(ctx) {
    const { query } = ctx;
    const limit = Number(query.limit) || 20;

    const entity = await strapi.entityService.findMany('api::tag.tag', {
      filters: {
        isActive: true,
        usageCount: { $gt: 0 }
      },
      sort: 'usageCount:desc',
      limit
    });

    return this.transformResponse(entity);
  },

  // Get trending tags
  async findTrending(ctx) {
    const { query } = ctx;

    const entity = await strapi.entityService.findMany('api::tag.tag', {
      ...query,
      filters: {
        isTrending: true,
        isActive: true
      },
      sort: 'usageCount:desc'
    });

    return this.transformResponse(entity);
  },

  // Get tags by category
  async findByCategory(ctx) {
    const { category } = ctx.params;
    const { query } = ctx;

    const entity = await strapi.entityService.findMany('api::tag.tag', {
      ...query,
      filters: {
        category: { $eq: category },
        isActive: true
      },
      sort: 'name:asc'
    });

    return this.transformResponse(entity);
  },

  // Search tags
  async search(ctx) {
    const { q } = ctx.query;
    const { query } = ctx;

    if (!q) {
      return ctx.badRequest('Search query is required');
    }

    const searchTerm = String(q);

    const entity = await strapi.entityService.findMany('api::tag.tag', {
      ...query,
      filters: {
        $or: [
          { name: { $containsi: searchTerm } },
          { description: { $containsi: searchTerm } }
        ],
        isActive: true
      },
      sort: 'usageCount:desc'
    });

    return this.transformResponse(entity);
  },

  // Create tag
  async create(ctx) {
    const entity = await strapi.entityService.create('api::tag.tag', ctx.request.body);
    return this.transformResponse(entity);
  }
}));