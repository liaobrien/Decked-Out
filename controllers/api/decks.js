const router = require('express').Router();
const { Deck } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const newDeck = await Deck.create({
        name: req.body.deckName,
        user_id: req.session.user_id
      });
      console.log(newDeck)
      res.status(200).json(newDeck);
    } catch (err) {
        console.log(newDeck)
      res.status(400).json(err);
    }
  });
  
  module.exports = router;