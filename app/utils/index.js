'use strict';

const jwt = require('jsonwebtoken');

const config = require('../config');

const createToken = () =>
  jwt.sign({ foo: 'bar' }, config.get('secret'), { expiresIn: 60 * 60 * 24 });

module.exports = {
  createToken,
};
