'use strict';

const path = require('path');

module.exports = (prod, src) => {
  const entryFile = path.join(src, 'entry.js');

  const app = prod
    ? [entryFile]
    : [
        'eventsource-polyfill', // necessary for hot reloading with IE
        'webpack-hot-middleware/client?reload=true',
        entryFile,
      ];

  return { app };
};
