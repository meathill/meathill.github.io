/**
 * Created by meathill on 2017/7/1.
 */

const path = require('path');
const webpack = require('webpack');
const dev = require('./config/dev');

module.exports = {
  entry: './main.js',
  context: path.resolve(__dirname, 'app'),
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      }
    ]
  },
  devtool: 'source-map',
  externals: {
    'jquery': 'jQuery'
  },
  watch: true,
  watchOptions: {
    poll: 1000,
    ignored: /node_modules|styl|css|js/
  },
  plugins: [
    new webpack.DefinePlugin(dev)
  ]
};