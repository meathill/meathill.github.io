/**
 * Created by meathill on 2017/7/1.
 */

const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const production = require('./config/production');
const config = require('./webpack.config');

//config.devtool = 'source-map';
config.watch = false;
config.plugins = [
  new webpack.DefinePlugin(production),
  new UglifyJSPlugin({
    parallel: true,
    uglifyOptions: {
      compress: {
        warnings: false,
        drop_console: true,
      },
    },
  }),
];

module.exports = config;