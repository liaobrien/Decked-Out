const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

const reqApi = require('./api')

router.use('/api', reqApi)

router.use('/', homeRoutes);

module.exports = router;
