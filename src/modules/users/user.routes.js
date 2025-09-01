import express from 'express';
import { createUser } from './user.controller.js';

const router = express.Router();

router.post('/', createUser);

export default router;

// const router = require('express').Router();
// const controller = require('./user.controller');
// const validate = require('../../middlewares/validate');
// const { createUserSchema } = require('./user.validation');

// router.post('/', validate(createUserSchema), controller.create);
// router.get('/:id', controller.getById);

// module.exports = router;
