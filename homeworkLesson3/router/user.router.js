const router = require('express').Router();
const userController = require('../controller/user.controller');
const userMiddleware = require('../middleware/user.middleware');

router.get('/', userController.getAllUsers);
router.get('/:userId', userController.getUserById);
router.post('/signUp', userMiddleware.isUserValid, userController.signUpUser);
router.post('/login', userMiddleware.alreadyRegistered, userController.loginUser);


module.exports = router;