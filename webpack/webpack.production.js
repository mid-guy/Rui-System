/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Mode Production'),
    }),
    new BundleAnalyzerPlugin(),
  ],
}
