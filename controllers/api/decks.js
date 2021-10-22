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
  
  router.delete('/:id', async (req, res) => {
  try{
    const deleteDeck = await Deck.destroy({
        where: {
            id: req.params.id
        }
    })
      const destroyedDeck = await deleteDeck
        if (!destroyedDeck) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(destroyedDeck);}

    catch(err) {
        console.log(err);
        res.status(500).json(err);
    };
});


  module.exports = router;