export default [
  'strapi::errors',
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
  {
    name: 'strapi::cors',
    config: {
      origin: (process.env.CORS_ORIGINS || '')
        .split(',')
        .map(s => s.trim())
        .filter(Boolean),
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
