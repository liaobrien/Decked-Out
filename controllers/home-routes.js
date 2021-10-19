const sequelize = require('../config/connection');
// const { Post, User, Comment } = require('../models'); //tbd when we get models set up
const router = require('express').Router();
//the get request for the main page
router.get('/', async (req, res) => {
	try{
   	 res.render('homepage') //renders the homepage for now, no fancy sql calls yet
	}

	catch(err) {
        console.log(err);
        res.status(500).json(err);
		};
});

module.exports = router;