export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3000),
  url: env('URL', 'https://api-staging.lanombreuse.com'), 
  app: { keys: env.array('APP_KEYS') },
  proxy: true,
});
