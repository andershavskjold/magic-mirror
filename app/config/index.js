/*
 * This file is part of the magic-mirror application.
 *
 * @author anders.havskjold <anders@havskjold.no>
 */

'use strict';

module.exports = {
  set: (prop, val) => {
    this[prop] = val;
  },

  get: prop => this[prop],
};
