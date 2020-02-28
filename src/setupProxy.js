const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'https://3000-d3da26be-2100-4f34-9ccd-bd381cf4e67b.ws-us02.gitpod.io',
      changeOrigin: true,
    })
  );
};