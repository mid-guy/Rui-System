/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    /**
     * @open = --open/package.json
     */
    open: true,
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Mode Development'),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
}
