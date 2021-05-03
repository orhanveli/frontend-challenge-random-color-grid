const path = require('path');

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  // devtool: 'inline-cheap-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../public'),
    compress: false,
    liveReload: false,
    clientLogLevel: 'debug',
    // lazy: true,
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Talwind Test React App',
      template: path.join(__dirname, './index.html'),
    }),
  ],
});
