const router = require('express').Router();
const { authController } = require('../controller');
const { authMiddlewares, userMiddlewares } = require('../middleware');

router.post('/', userMiddlewares.checkIsUserPresent, authController.userAuth);
router.post('/refresh', authMiddlewares.checkRefreshTokenMiddleware, authController.refreshToken);



module.exports = router;