
const orm = require('../config/orm')
const Shuffle = require('shuffle')


// Create code that will call the ORM  functions using burger specific input for the ORM
const blackCards = {
  blackDeck: [],

  card: this.deck.draw(),
  shuffleCards: (cb) => {
    orm.startDecks('blackCards', (res) => {
      this.blackDeck.push(...res)
      let deck = Shuffle.shuffle({ deck: this.blackDeck }),


    })
  },
  dealCards: (cb) => {

  }
}

// Export
module.exports = blackCards
