const router = require('express').Router();
const controller = require('./user.controller');
const validate = require('../../middlewares/validate');
const { createUserSchema } = require('./user.validation');

router.post('/', validate(createUserSchema), controller.create);
router.get('/:id', controller.getById);

module.exports = router;
