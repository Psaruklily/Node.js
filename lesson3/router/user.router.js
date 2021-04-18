const router = require('express').Router();
const userController = require('../controller/user.controller');
const userMiddleware = require('../middleware/user.middleware');

router.get('/', userController.getAllUsers);

router.get('/:id', userMiddleware.checkIsIdValid, userController.getOneUser);

router.post('/', userMiddleware.isUserValid, userController.createUser);




module.exports = router;