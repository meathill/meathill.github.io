/**
 * Created by meathill on 2017/7/1.
 */

const path = require('path');
const webpack = require('webpack');
const dev = require('./config/dev');

module.exports = {
  entry: {
    main: './main.js',
  },
  context: path.resolve(__dirname, 'app'),
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: '[name].js',
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
  watch: true,
  watchOptions: {
    poll: 1000,
    ignored: /node_modules|styl|css|js/
  },
  plugins: [
    new webpack.DefinePlugin(dev)
  ],
};