'use strict';

const path = require('path');
const createConfig = require('./tools/webpack/createConfig');

const prod = process.env.NODE_ENV === 'production';

const src = path.resolve(__dirname, 'src');

const dest = path.resolve(__dirname, 'public');

const publicPath = '/';

module.exports = createConfig(prod, src, dest, publicPath);
