const CompressionPligin = require('compression-webpack-plugin')
module.exports = {
  configureWebpack: {
    plugins: [
      new CompressionPligin()
    ]
  }
}
