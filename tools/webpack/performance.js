'use strict';

module.exports = prod => ({
  hints: !prod ? false : 'warning',
  maxAssetSize: 1024 ** 2 * 0.5, // int (in bytes),
  maxEntrypointSize: 1024 ** 2 * 1, // int (in bytes),
});
