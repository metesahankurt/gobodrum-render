import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::page.page', ({ strapi }) => ({
  // Override default find method to populate components
  async find(ctx) {
    const { query } = ctx;
    
    const entity = await strapi.entityService.findMany('api::page.page', {
      ...query,
      populate: {
        components: true,
        ogImage: true,
      },
    });

    return this.transformResponse(entity);
  },

  // Override default findOne method to populate components
  async findOne(ctx) {
    const { id } = ctx.params;
    const { query } = ctx;

    const entity = await strapi.entityService.findOne('api::page.page', id, {
      ...query,
      populate: {
        components: true,
        ogImage: true,
      },
    });

    return this.transformResponse(entity);
  },

  // Custom endpoint to find page by slug
  async findBySlug(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.entityService.findMany('api::page.page', {
      filters: { slug: { $eq: slug } },
      populate: {
        components: true,
        ogImage: true,
      },
    });

    if (entity.length === 0) {
      return ctx.notFound('Page not found');
    }

    return this.transformResponse(entity[0]);
  },
}));