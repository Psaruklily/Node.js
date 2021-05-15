const router = require('express').Router();
const { userController } = require('../controller');
const { userMiddlewares, authMiddlewares, fileMiddlewares } = require('../middleware');

router.get('/', userController.getAllUsers);

router.get('/:userId', userController.getUserByID);
router.delete('/:userId', authMiddlewares.checkAccessTokenMiddleware, userController.deleteUser);

router.post('/signUp',
    fileMiddlewares.checkFile,
    fileMiddlewares.checkAvatar,
    userMiddlewares.isUserValid,
    userController.signUp);

module.exports = router;