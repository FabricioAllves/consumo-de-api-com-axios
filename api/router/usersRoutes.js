const express = require('express');
const router = express.Router()
const userController = require('../controller/userController')

router.post('/createUser', userController.createUser)
router.post('/auth', userController.authenticator)


module.exports = router