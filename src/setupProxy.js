const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  // 代理就是访问的是3000，实际请求的是3000
  app.use(proxy('/api', {
      target: 'http://127.0.0.1:8000',
      changeOrigin: true,
      pathRewrite: {'^/api' : '/'}
    }))
};