/*
 * This file is part of the magic-mirror application.
 *
 * @author anders.havskjold <anders@havskjold.no>
 */

'use strict';

const path = require('path');
const expressStaticGzip = require('express-static-gzip');
const favicon = require('serve-favicon');

module.exports = (app, root) => {
  app.use('/', expressStaticGzip(path.join(root)));

  app.use(
    '/assets',
    expressStaticGzip(path.join(root, 'assets'), {
      enableBrotli: true,
    })
  );

  app.use(favicon(path.join(root, 'favicon.ico')));

  // app.use((req, res, next) => {
  //   if (req.method === 'GET' && req.accepts('text/html')) {
  //     res.sendFile('index.html', { root });
  //   } else {
  //     next();
  //   }
  // });
};
