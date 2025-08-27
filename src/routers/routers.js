const express = require('express');
const configRouter = require('./config');

const router = express.Router();

router.use('/config', configRouter);

module.exports = router;