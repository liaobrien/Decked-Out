const seedUsers = require('./user-seeds');
const seedDecks = require('./decks');
const seedCards = require('./cards');


const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedDecks();
    await seedCards();
    process.exit(0);
};

seedAll();