const router = require('express').Router();

const userRoutes = require('./user-routes');

const decks = require('./decks');

const newCards = require('./cards')

router.use('/users', userRoutes);

router.use('/decks', decks);

router.use('/cards', newCards)

module.exports = router;