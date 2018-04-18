/*
 * This file is part of the magic-mirror application.
 *
 * @author anders.havskjold <anders@havskjold.no>
 */

'use strict';

const path = require('path');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpack.config');

module.exports = (app, root) => {
  const compiler = webpack(webpackConfig);

  const devMiddleware = webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: true,
    stats: {
      colors: true,
      display: 'minimal',
    },
  });

  app.use(devMiddleware);
  app.use(webpackHotMiddleware(compiler));

  app.use((req, res, next) => {
    if (req.method === 'GET' && req.accepts('html')) {
      res.write(
        devMiddleware.fileSystem.readFileSync(path.join(root, 'index.html'))
      );
      res.end();
    } else {
      next();
    }
  });
};
