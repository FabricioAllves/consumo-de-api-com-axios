const express = require('express');
const router = express.Router()
const gameController = require('../controller/gameController')
const auth = require('../middleware/auth')

router.get('/listAll', auth, gameController.listAll)
router.get('/search/:id', gameController.searchId)
router.post('/createGame', auth, gameController.createGame)
router.put('/update/:id', auth, gameController.updateId)
router.delete('/remove/:id', auth, gameController.deleteId)

module.exports = router