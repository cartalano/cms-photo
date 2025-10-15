export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: [
        'http://localhost:3000',
        'http://localhost:3001',
        'https://cartalano.github.io',
        'https://cartalano.github.io/LaNombreuse'
      ],
      headers: '*',
      methods: ['GET','POST','PUT','PATCH','DELETE','HEAD','OPTIONS'],
      keepHeadersOnError: true,
    },
  },
  'strapi::security',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
]