export default {
  routes: [
    {
      method: 'GET',
      path: '/pages',
      handler: 'page.find',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/pages/:id',
      handler: 'page.findOne',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/pages/slug/:slug',
      handler: 'page.findBySlug',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/pages',
      handler: 'page.create',
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/pages/:id',
      handler: 'page.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/pages/:id',
      handler: 'page.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};