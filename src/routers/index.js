const express = require('express');
const configRouter = require('./config');
//const router = express.Router();

router.use('/config', configRouter);

// module.exports = router;

const router = require('express').Router();
const userRoutes = require('../modules/users/user.routes');
const repairRoutes = require('../modules/repairs/repair.routes');

//מוגדרים בנתיבים שלהם
router.use('/users', userRoutes);
router.use('/repairs', repairRoutes);

module.exports = router;
