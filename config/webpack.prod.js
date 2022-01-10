const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: 4,
        extractComments: false,
        terserOptions: {
          compress: { pure_funcs: ['console.log', 'debugger'] },
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
  // plugins: [new BundleAnalyzerPlugin()],
});
