const express = require('express')

const Controller = require('../controllers/myController')

const router = express.Router()

router.post('/sendMessage', Controller.contactMe) //send text message
router.post('/bio', Controller.bio)
router.get('/getAllData', Controller.getAllData)
router.post('/login', Controller.login)

module.exports = router