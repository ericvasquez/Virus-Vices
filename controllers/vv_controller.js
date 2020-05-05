const express = require('express')
var router = express.Router()

// const virus = require('../models/virusVices')
// const orm = require('../config/orm')

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/api/gameroom', (req, res) => {
    res.render('test')
//   orm.startDecks('blackCards', (res) => {
//     const BlackDeck = [...res]
//     return BlackDeck
//   })

//   orm.startDecks('whiteCards', (res) => {
//     const whiteDeck = [...res]
//     return whiteDeck
//   })


})
module.exports = router
