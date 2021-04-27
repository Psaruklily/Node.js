const router = require('express').Router();
const userController = require('../controller/user.controller');
const { userMiddlewares } = require('../middleware');

router.get('/', userController.getAllUsers);
router.get('/:userId', userController.getUserByID);
router.post('/signUp', userMiddlewares.isUserValid, userController.signUp);

module.exports = router;