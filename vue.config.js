const CompressionPligin = require('compression-webpack-plugin')
module.exports = {
  baseUrl: './',
  configureWebpack: {
    plugins: [
      new CompressionPligin()
    ]
  }
}
