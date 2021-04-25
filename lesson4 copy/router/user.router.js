const router = require('express').Router();
const userController = require('../controller/user.controller');
const { userMiddlewares } = require('../middleware');

router.get('/', userController.getAllUsers);
router.get('/:userId', userController.getUserById);
//router.post('/signUp', userMiddlewares.isUserValid, userController.signUpUser);
//router.post('/login', userMiddlewares.alreadyRegistered, userController.loginUser);
router.post('/signUp', userController.signUpUser);


module.exports = router;