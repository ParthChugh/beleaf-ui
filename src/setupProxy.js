const { createProxyMiddleware } = require('http-proxy-middleware');
const proxy = {
    target: 'http://52.220.215.96',
    changeOrigin: true
}
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware(proxy)
  );
};