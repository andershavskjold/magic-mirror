/*
 * This file is part of the magic-mirror application.
 *
 * @author anders.havskjold <anders@havskjold.no>
 */

'use strict';

const jwt = require('jsonwebtoken');
const unless = require('express-unless');

const config = require('../config');

const validateToken = () => {
  const validate = (req, res, next) => {
    let token = null;

    if (
      req.headers.authorization &&
      req.headers.authorization.split(' ')[0] === 'Bearer'
    ) {
      token = req.headers.authorization.split(' ')[1];
    }

    jwt.verify(token, config.get('secret'), err => {
      if (!err) {
        return next();
      }

      return res.status(401).json({
        error: {
          message: 'No no no, what you playing at?!.',
        },
      });
    });
  };

  validate.unless = unless;

  return validate;
};

module.exports = {
  validateToken,
};
