const router = require('express').Router();
const { userController } = require('../controller');
const { userMiddlewares, authMiddlewares } = require('../middleware');

router.get('/', userController.getAllUsers);

//router.use('/:userId', authMiddlewarres.checkAccessTokenMiddleware)//Якщо мідловари повторяються у групі ендпоїнтів і щоб їх не дуюлювати, використовують router.use...
router.get('/:userId', userController.getUserByID);
router.delete('/:userId', authMiddlewares.checkAccessTokenMiddleware, userController.deleteUser);

router.post('/signUp', userMiddlewares.isUserValid, userController.signUp);

// router.route('/:userId')
//   .all(authMiddlewarres.checkAccessTokenMiddleware)
//   .delete(authMiddlewarres.checkAccessTokenMiddleware, userController.deleteUser)

module.exports = router;