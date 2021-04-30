const router = require('express').Router();
const { authController } = require('../controller');

router.post('/', authController.userAuth);


module.exports = router;