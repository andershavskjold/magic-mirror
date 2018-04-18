/*
 * This file is part of the magic-mirror application.
 *
 * @author anders.havskjold <anders@havskjold.no>
 */

'use strict';

const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.json({ limit: '50mb' }));
router.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));

router.use(cors());

const authMiddleware = require('../middlewares/authMiddleware');

router.use(
  authMiddleware.validateToken().unless({
    path: [
      {
        url: '/v1/user/authenticate',
        methods: ['POST'],
      },
    ],
  })
);

const indexController = require('../controllers/indexController');

router.get('/', indexController.index);
router.get('/:id', indexController.show);
router.put('/:id', indexController.update);
router.post('/', indexController.create);
router.delete('/', indexController.destroy);

const userController = require('../controllers/userController');
router.post('/user/authenticate', userController.auth);

router.use((req, res) => {
  res.status(404).json({ message: "Couldn't find what you're looking for." });
});

module.exports = router;
