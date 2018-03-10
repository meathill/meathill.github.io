/**
 * Created by meathill on 2017/7/1.
 */

const webpack = require('webpack');
const production = require('./config/production');
const config = require('./webpack.config');

config.devtool = 'source-map';
config.mode = 'production';
config.watch = false;
config.plugins = [
  new webpack.DefinePlugin(production),
];

module.exports = config;