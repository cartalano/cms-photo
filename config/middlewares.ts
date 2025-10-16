export default [
  'strapi::logger',
  'strapi::errors',

  {
    name: 'strapi::cors',
    config: {
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

  {
    name: 'strapi::security',
    config: {
      
      crossOriginResourcePolicy: { policy: 'cross-origin' },   
      crossOriginOpenerPolicy:   { policy: 'same-origin-allow-popups' },
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy:     false,                       
      referrerPolicy:            { policy: 'no-referrer' },
    },
  },

  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
]
