const User = require('./User');
const Deck = require('./Deck');
const Card = require('./Card');

User.hasMany(Deck, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE'
});

Deck.belongsTo(User, {
      foreignKey: 'user_id'
});

Deck.hasMany(Card, {
      foreignKey: 'deck_id',
      onDelete: 'CASCADE'
});

Card.belongsTo(Deck, {
      foreignKey: 'deck_id'
});

module.exports = { User, Deck, Card };