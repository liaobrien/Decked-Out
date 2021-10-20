const sequelize = require('../config/connection');
const { Deck, User, Card } = require('../models'); //tbd when we get models set up
const router = require('express').Router();
//the get request for the main page
router.get('/', async (req, res) => {
	try{
		const deckQuery = await Deck.findAll({
				attributes:[
					'id',
					'name',
					'user_id'
				],
				include: [{
					model: Card,
					attributes: ['id', 'question', 'answer', 'deck_id']
				}]
			})
		
			const decks = deckQuery.map((displayDecks) => 
				displayDecks.get({plain:true})
			)
   	 res.render('homepage', {decks}) //renders the homepage for now
	}

	catch(err) {
        console.log(err);
        res.status(500).json(err);
		};
});


router.get('/deck/:id', async (req, res) => {
	try{
		const deckbyID = await Deck.findOne({
			where:{
					id: req.params.id
			},
			attributes:[
					'id',
					'name',
					'user_id'
				],
			include: [{
					model: Card,
					attributes: ['id', 'question', 'answer', 'deck_id']
				}]
			})

			const singleDeck = await deckbyID
            if (!singleDeck) {
                res.status(404).json({ message: 'No deck found with this id' });
                return;
            }

            const deckCards = singleDeck.get({ plain: true });
            console.log(deckCards);
            res.render('deckofCards', { deckCards }); //This is similar to how the homepage works, except if we click on a post it instead renders the individual post!


        }
        catch(err) {
            console.log(err);
            res.status(500).json(err);
        };
});

module.exports = router;