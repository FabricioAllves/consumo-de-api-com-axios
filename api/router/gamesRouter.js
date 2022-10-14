const express = require('express');
const router = express.Router()
const gameController = require('../controller/gameController')

router.get('/listAll', gameController.listAll)

router.post('/createGame', gameController.createGame)

module.exports = router