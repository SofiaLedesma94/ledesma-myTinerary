const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const authValidator = require('../middlewares/authValidator')
const dbReady = require('../middlewares/dbReady')
const passport = require('passport')
require('../config/passport')

router.route('/api/user/signup')
  .post(authValidator.accountToValidate, dbReady, userController.signup)

router.route('/api/user/signin')
  .post(authValidator.signinToValidate, dbReady, userController.signin)

router.route('/api/ls')
  .post(passport.authenticate('jwt', { session: false }), dbReady, userController.logFromLocalStorage)

module.exports = router
