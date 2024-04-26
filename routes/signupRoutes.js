const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController')
const signupMiddlewares = require('../Middlewares/SignupMiddlewares')

router.get('/',userController.signuppage)
router.post('/',signupMiddlewares.isValidPasswordLength,signupMiddlewares.ispasswordconfirmed,userController.CreateUserInDB)
module.exports = router