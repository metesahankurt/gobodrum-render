export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      headers: ['*'],
      origin: [
        'http://localhost:3000', // Development
        'https://gobodrum.com',  // Production
        'https://www.gobodrum.com', // Production with www
        'https://go-bodrum-v5.vercel.app', // Vercel preview
        'https://go-bodrum-v5-*.vercel.app', // Vercel branch deploys
      ],
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
