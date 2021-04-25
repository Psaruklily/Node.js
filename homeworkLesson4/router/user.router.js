const router = require('express').Router();
const userController = require('../controller/user.controller');

router.get('/', userController.getAllUsers);
router.get('/:userId', userController.getUserByID);
router.post('/signUp', userController.signUp);

module.exports = router;