/**
 * Created by meathill on 2017/7/1.
 */
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {defaults} = require('lodash');
const base = require('./webpack.config');

module.exports = defaults({
  mode: 'production',
  devtool: false,

  module: {
    rules: base.module.rules.map(rule => {
      if (!rule.test.test('a.styl')) {
        return rule;
      }
      rule.use[0] = MiniCssExtractPlugin.loader;
      return rule;
    }),
  },

  plugins: base.plugins.concat(
    [
      new MiniCssExtractPlugin({
        filename: 'screen.css',
      }),
      new CopyWebpackPlugin([
        {
          from: 'ads.txt',
        },
      ]),
    ]
  ),

  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin(),
      new TerserPlugin({
        cache: true,
        parallel: true,
        exclude: /node_modules/,
        terserOptions: {
          ecma: 7,
          toplevel: true,
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
}, base);
