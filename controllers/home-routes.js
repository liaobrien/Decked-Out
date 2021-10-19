const sequelize = require('../config/connection');
// const { Post, User, Comment } = require('../models');
const router = require('express').Router();
//the get request for the main page.
router.get('/', async (req, res) => {
	try{
   	 res.render('homepage')
	}

	catch(err) {
        console.log(err);
        res.status(500).json(err);
		};
});

module.exports = router;