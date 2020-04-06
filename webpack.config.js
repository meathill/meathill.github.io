/**
 * Created by meathill on 2017/7/1.
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require('./package');
const time = Date.now();

module.exports = {
  output: {
    path: path.resolve(__dirname, './'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.styl(us)?$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|woff2|eot|woff|ttf|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets',
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  mode: 'development',
  devtool: 'source-map',
  externals: {
    'jquery': 'jQuery',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './index.pug'),
      templateParameters: {
        version: `${pkg.version}.${time}`,
      }
    }),
  ],
  devServer: {
    port: 8080,
  },
};
