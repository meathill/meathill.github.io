/**
 * Created by meathill on 2017/7/1.
 */

const webpack = require('webpack');
const uglify = require('uglifyjs-webpack-plugin');
const production = require('./config/production');
const config = require('./webpack.config');

//config.devtool = 'source-map';
config.watch = false;
config.plugins = [
  new webpack.DefinePlugin(production),
  new uglify(),
];

module.exports = config;