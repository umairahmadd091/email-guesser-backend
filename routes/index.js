const express = require('express');
const router = express.Router();
const controllers = require('../controller');

router.post('/guess-email', controllers.index);

module.exports = router;
