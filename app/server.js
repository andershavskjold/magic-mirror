/*
 * This file is part of the magic-mirror application.
 *
 * @author anders.havskjold <anders@havskjold.no>
 */

'use strict';

const path = require('path');
const express = require('express');
const logger = require('morgan');

const config = require('./config');

const secret = new Buffer(process.env.SECRET || 'secret', 'base64');

config.set('secret', secret);

const v1 = require('./routes');

const root = path.join(__dirname, './../public');

const production = process.env.NODE_ENV !== 'development';
const port = process.env.PORT || 3000;

const app = express();

app.use(logger(production ? 'combined' : 'dev'));

app.use('/v1', v1);

if (production) {
  require('./server.prod')(app, root);
} else {
  require('./server.dev')(app, root);
}

app.listen(port, err => {
  if (err) console.log(err);

  console.log('Server running on port %s', port);
});
