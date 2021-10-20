const router = require('express').Router();
//tbd
const userRoutes =require('./user-routes.js');
const postRoutes =require('./post-routes');
const commentRoutes = require('./comment-routes');
const { Router } = require('express');

router.use('./users', userRoutes);
router.use('./post', postRoutes);
router.use('comments', commentRoutes);

module.exports = router;