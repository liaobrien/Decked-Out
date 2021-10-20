const sequelize = require('../config/connection');
const { Deck, User, Card } = require('../models'); //tbd when we get models set up
const router = require('express').Router();
//the get request for the main page
router.get('/', async (req, res) => {
	try {
		const deckQuery = await Deck.findAll({
			attributes: [
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
			displayDecks.get({ plain: true })
		)
		res.render('homepage', { decks }) //renders the homepage for now
	}

	catch (err) {
		console.log(err);
		res.status(500).json(err);
	};
});


// login route
router.get('/login', (req, res) => {
	// If the user is already logged in, redirect to the homepage
	if (req.session.loggedIn) {
		res.redirect('/');
		return;
	}
	// Otherwise, render the 'login' template
	res.render('login');
});

module.exports = router;