const { User } = require('../models'); //this may need adjusting when models are posted

const userData = [{
        id: 1,
        username: 'Chase',
        password: 'chase10'

    },
    {
        id: 2,
        username: 'Jeff',
        password: 'jeff20'
    },
    {
        id: 3,
        username: 'Chris',
        password: 'chris30'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;