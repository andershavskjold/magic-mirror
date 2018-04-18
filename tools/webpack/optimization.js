'use strict';

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = prod => {
  const optimization = {
    splitChunks: {
      cacheGroups: {
        // Splits code into vendor and app files. This is useful because code that
        // doesn't change frequently will be cached and returning users will only
        // have to download a smaller file (app.js) to get the updated code.
        commons: {
          // test: /node_modules/,
          test: /node_modules\/(?!.*(css))/,
          name: 'vendor',
          chunks: 'all',
          enforce: true,
        },
        // styles: {
        //   name: 'styles',
        //   test: /\.css$/,
        //   chunks: 'all',
        //   enforce: true,
        // },
      },
    },
    // In order to keep the module order intact with the vendor/app files, we need
    // to create an index file called manifest that operates as a lookup for your
    // imports.
    runtimeChunk: {
      name: 'manifest',
    },
  };

  if (prod) {
    optimization.minimizer = [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false,
            conditionals: true,
            unused: true,
            comparisons: true,
            sequences: true,
            dead_code: true,
            drop_console: true,
            evaluate: true,
            if_return: true,
            join_vars: true,
            negate_iife: false,
          },
          output: {
            comments: false,
          },
        },
        parallel: true,
        cache: true,
      }),
    ];
  } else {
    optimization.namedModules = true;
  }

  return optimization;
};
