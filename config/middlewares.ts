export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: false,
      origin: ['http://localhost:3000', 'https://sensibar-coaching.de', 'https://www.sensibar-coaching.de'],  // Specify the allowed origins
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD'],  // Allowed methods
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],  // Allowed headers
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
