/**
 * Created by meathill on 2017/7/1.
 */

const path = require('path');
const webpack = require('webpack');
const dev = require('./config/dev');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'docs'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.hbs$/,
        use: 'handlebars-loader',
      },
    ],
  },
  devtool: 'source-map',
  externals: {
    'jquery': 'jQuery'
  },
  mode: 'development',
  plugins: [
    new webpack.DefinePlugin(dev)
  ],
};
