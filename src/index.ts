// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    // Set up API permissions for public access
    const publicRole = await strapi
      .query('plugin::users-permissions.role')
      .findOne({ where: { type: 'public' } });

    if (publicRole) {
      // Set permissions for Page content type
      await strapi.query('plugin::users-permissions.permission').update({
        where: { 
          role: publicRole.id, 
          action: 'api::page.page.find' 
        },
        data: { enabled: true }
      });

      await strapi.query('plugin::users-permissions.permission').update({
        where: { 
          role: publicRole.id, 
          action: 'api::page.page.findOne' 
        },
        data: { enabled: true }
      });

      // Set permissions for Article content type
      await strapi.query('plugin::users-permissions.permission').update({
        where: { 
          role: publicRole.id, 
          action: 'api::article.article.find' 
        },
        data: { enabled: true }
      });

      await strapi.query('plugin::users-permissions.permission').update({
        where: { 
          role: publicRole.id, 
          action: 'api::article.article.findOne' 
        },
        data: { enabled: true }
      });

      // Set permissions for Category content type
      await strapi.query('plugin::users-permissions.permission').update({
        where: { 
          role: publicRole.id, 
          action: 'api::category.category.find' 
        },
        data: { enabled: true }
      });

      await strapi.query('plugin::users-permissions.permission').update({
        where: { 
          role: publicRole.id, 
          action: 'api::category.category.findOne' 
        },
        data: { enabled: true }
      });

      // Set permissions for Tag content type
      await strapi.query('plugin::users-permissions.permission').update({
        where: { 
          role: publicRole.id, 
          action: 'api::tag.tag.find' 
        },
        data: { enabled: true }
      });

      await strapi.query('plugin::users-permissions.permission').update({
        where: { 
          role: publicRole.id, 
          action: 'api::tag.tag.findOne' 
        },
        data: { enabled: true }
      });

      // Set permissions for Hotel content type
      await strapi.query('plugin::users-permissions.permission').update({
        where: { 
          role: publicRole.id, 
          action: 'api::hotel.hotel.find' 
        },
        data: { enabled: true }
      });

      await strapi.query('plugin::users-permissions.permission').update({
        where: { 
          role: publicRole.id, 
          action: 'api::hotel.hotel.findOne' 
        },
        data: { enabled: true }
      });

      console.log('✅ API permissions have been set up for public access');
    }
  },
};
