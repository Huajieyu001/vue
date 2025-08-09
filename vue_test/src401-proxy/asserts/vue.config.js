const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    // 代理方式一
    // proxy: 'http://localhost:5000'
    // 代理方式二
    proxy: {
      '/5000': {
        target: 'http://localhost:5000',
        pathRewrite:{'^/5000': ''}
        // ws: true,
        // changeOrigin: true
      },
      '/5001': {
        target: 'http://localhost:5001',
        pathRewrite:{'^/5001': ''}
      }
    }
  }
})
