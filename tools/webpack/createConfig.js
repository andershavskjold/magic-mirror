'use strict';

const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackChunkHash = require('webpack-chunk-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const createEntry = require('./entry');
const createOutput = require('./output');
const createResolve = require('./resolve');
const createPerformance = require('./performance');
const createRules = require('./rules');
const createOptimization = require('./optimization');

module.exports = (prod, src, dest, publicPath) => ({
  mode: prod ? 'production' : 'development',

  devtool: prod ? undefined : 'cheap-module-source-map',

  entry: createEntry(prod, src),

  output: createOutput(prod, dest, publicPath),

  resolve: createResolve(src),

  module: {
    rules: createRules(prod, src),
  },

  performance: createPerformance(prod),

  optimization: createOptimization(prod),

  plugins: [
    // Copy files from static.
    new CopyWebpackPlugin([
      {
        from: path.join(src, 'static'),
      },
    ]),
    new HtmlWebpackPlugin({
      inject: false,
      chunksSortMode: 'dependency',
      template: path.join(src, 'templates', 'index.html'),
      favicon: path.join(src, 'static', 'favicon.ico'),
      filename: 'index.html',
      minify: {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
      },
    }),
  ].concat(
    prod
      ? [
          new webpack.HashedModuleIdsPlugin(),
          new WebpackChunkHash(),
          new MiniCssExtractPlugin({
            filename: 'assets/styles/[chunkhash:5].css',
            chunkFilename: 'assets/styles/[chunkhash:5].css',
          }),
        ]
      : [new webpack.HotModuleReplacementPlugin()]
  ),
});
