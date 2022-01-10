const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const { SERVER_HOST, SERVER_PORT } = require('./constants');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    host: SERVER_HOST,
    port: SERVER_PORT,
    hot: true,
    compress: true, // gzip压缩
    client: {
      logging: 'verbose',
      overlay: true,
    },
  },
  devtool: 'eval',
});
