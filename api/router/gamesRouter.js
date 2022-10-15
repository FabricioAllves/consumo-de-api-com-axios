const express = require('express');
const router = express.Router()
const gameController = require('../controller/gameController')

router.get('/listAll', gameController.listAll)
router.get('/search/:id', gameController.searchId)
router.post('/createGame', gameController.createGame)
router.put('/update/:id', gameController.updateId)
router.delete('/remove/:id', gameController.deleteId)

module.exports = router