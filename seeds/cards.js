const { Card } = require('../models'); //this may need adjusting when models are posted

const cardData = [{
        id: 1,
        question: 'How many carbons in a benzene ring?',
        answer: 'Six',
        deck_id: 1

    },
    {
        id: 2,
        question: 'E/Z stand for what?',
        answer: 'entgegen = opposite and zusammen = together',
        deck_id: 1

    },
    {
        id: 3,
        question: 'Where are macrophages found?',
        answer: 'In almost all tissue',
        deck_id: 2

    },
    {
        id: 4,
        question: 'When did the Civil War begin?',
        answer: '1861',
        deck_id: 3

    },
];

const seedUsers = () => User.bulkCreate(cardData);

module.exports = seedUsers;