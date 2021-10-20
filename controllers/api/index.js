const router = require('express').Router();

const userRoutes = require('./user-routes');

const decks = require('./decks');

router.use('/users', userRoutes);

router.use('/decks', decks);

module.exports = router;