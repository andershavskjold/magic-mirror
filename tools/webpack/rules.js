'use strict';

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (prod, src) => {
  const cssNanoOptions = {
    preset: [
      'default',
      {
        discardComments: {
          removeAll: true,
        },
        discardUnused: true,
        autoprefixer: false,
        mergeIdents: true,
        reduceIdents: true,
        zindex: false,
      },
    ],
  };

  /**
   * This loader will match everything except the excluded files. This will
   * make webpack accept all sorts of files without having to specifiy them
   * excplicitly in the file loader.
   */
  const fallbackLoader = {
    /**
     * IMPORTANT:
     * If you add a new loader for a filetype you must add it to
     * this list of excludes as well.
     */
    exclude: [/\.html$/, /\.jsx?$/, /\.s?css$/, /\.json$/, /\.ya?ml$/],
    use: {
      loader: 'url-loader',
      options: {
        limit: 8092,
        name: prod ? 'media/[hash:5].[ext]' : '[path][name].[ext]',
      },
    },
  };

  const yamlLoader = {
    // Parse imported .yaml/.yml files as javascript objects.
    test: /\.ya?ml$/,
    use: [{ loader: 'json-loader' }, { loader: 'yaml-loader' }],
    exclude: /(node_modules)/,
  };

  const jsLoader = {
    // Transpile javascript with babel.
    test: /\.jsx?$/,
    use: [
      {
        loader: 'babel-loader',
        options: prod
          ? undefined
          : {
              // plugins: ['react-hot-loader/babel'],
              cacheDirectory: true,
              highlightCode: true,
            },
      },
    ],
    exclude: /(node_modules)/,
  };

  const cssLoader = {
    test: /\.s?css$/,
    exclude: /\.module\.s?css$/,
    use: [
      {
        loader: prod ? MiniCssExtractPlugin.loader : 'style-loader',
      },
      { loader: 'css-loader' },
      {
        loader: 'postcss-loader',
        options: {
          plugins: [
            require('autoprefixer')(),
            require('cssnano')(cssNanoOptions),
          ],
        },
      },
      {
        loader: 'sass-loader',
        options: {
          outputStyle: 'expanded',
          includePaths: [
            path.resolve(__dirname, 'node_modules'),
            path.join(src, 'styles'),
          ],
        },
      },
    ],
  };

  const cssModuleLoader = {
    // Import css files specified with .module as css-modules and process them with postcss.
    // https://github.com/css-modules/css-modules
    test: /\.module\.s?css$/,
    use: [
      {
        loader: prod ? MiniCssExtractPlugin.loader : 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          modules: true,
          camelCase: true,
          localIdentName: prod
            ? '[hash:5]'
            : '[name]__[local]--[hash:base64:2]',
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: [
            require('autoprefixer')(),
            require('cssnano')(cssNanoOptions),
          ],
        },
      },
      {
        loader: 'sass-loader',
        options: {
          outputStyle: 'expanded',
          includePaths: [
            path.resolve(__dirname, 'node_modules'),
            path.join(src, 'styles'),
          ],
        },
      },
    ],
  };

  return [
    {
      oneOf: [fallbackLoader, yamlLoader, jsLoader, cssLoader, cssModuleLoader],
    },
  ];
};
