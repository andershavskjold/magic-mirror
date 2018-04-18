'use strict';

module.exports = (prod, dest, publicPath) => ({
  // Output destination.
  path: dest,
  // Public path.
  publicPath,
  // Output filenames.
  filename: `assets/scripts/${prod ? '[chunkhash:5]' : '[name]'}.js`,
  chunkFilename: `assets/scripts/${prod ? '[chunkhash:5]' : '[name]'}.js`,
});
