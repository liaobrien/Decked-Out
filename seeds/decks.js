const { Deck } = require('../models'); //this may need adjusting when models are posted

const deckData = [{
        id: 1,
        name: 'Organic Chemistry',
        user_id: 1

    },
    {
        id: 2,
        name: 'Biology',
        user_id: 2

    },
    {
        id: 3,
        name: 'History',
        user_id: 3

    },
];

const seedUsers = () => User.bulkCreate(cardData);

module.exports = seedUsers;