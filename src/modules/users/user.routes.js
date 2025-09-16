import express from "express";
import { createUserController } from "./user.controller.js";

const router = express.Router();

// POST /api/users - יצירת משתמש חדש
router.post("/", createUserController);

export default router;


// const router = require('express').Router();
// const controller = require('./user.controller');
// const validate = require('../../middlewares/validate');
// const { createUserSchema } = require('./user.validation');

// router.post('/', validate(createUserSchema), controller.create);
// router.get('/:id', controller.getById);

// module.exports = router;
