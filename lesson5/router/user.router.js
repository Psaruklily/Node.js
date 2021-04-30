const router = require('express').Router();
const { userController } = require('../controller');
const { userMiddlewares, authMiddlewarres } = require('../middleware');

router.get('/', userController.getAllUsers);
router.get('/:userId', userController.getUserByID);
router.delete('/:userId', authMiddlewarres.checkAccessTokenMiddleware, userController.deleteUser);


router.post('/signUp', userMiddlewares.isUserValid, userController.signUp);

module.exports = router;