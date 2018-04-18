/*
 * This file is part of the magic-mirror application.
 *
 * @author anders.havskjold <anders@havskjold.no>
 */

'use strict';

const utils = require('../utils');

const auth = (req, res) =>
  res.status(200).json({
    token: utils.createToken(),
  });

module.exports = {
  auth,
};
