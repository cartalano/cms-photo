export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',                

  {
    name: 'strapi::cors',
    config: {
      origin: [
        'http://localhost:3000',
        'http://localhost:3001',
        'https://cartalano.github.io', 
      ],
      methods: ['GET','HEAD','OPTIONS','POST','PUT','PATCH','DELETE'],
      headers: ['Content-Type','Authorization','Origin','Accept','Range'],
      keepHeadersOnError: true,
    },
  },

  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
]