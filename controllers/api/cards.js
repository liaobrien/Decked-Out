const router = require('express').Router();
const { Card } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const newCard = await Card.create({
        question: req.body.cardQuestion,
        answer: req.body.cardAnswer,
        deck_id: req.body.deckID
      });
      console.log(newCard)
      res.status(200).json(newCard);
    } catch (err) {
        console.log(err)
      res.status(400).json(err);
    }
  });
  
  module.exports = router;