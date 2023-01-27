const { createProxyMiddleware, proxy } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://52.220.215.96',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/'
      }
    })
  );
};