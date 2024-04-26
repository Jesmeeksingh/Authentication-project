const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');
const LoginMiddleware = require('../Middlewares/LoginMiddlewares')

router.get('/',userController.loginpage)
router.post('/',LoginMiddleware.isUserValid,userController.logindone);

module.exports = router;