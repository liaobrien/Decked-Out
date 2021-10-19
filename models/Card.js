const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Card extends Deck {
}

Card.init(
      {
            id: {
                  type: DataTypes.INTEGER,
                  allowNull: false,
                  primaryKey: true,
                  autoIncrement: true
            },
            question: {
                  type: DataTypes.STRING,
                  allowNull: false
            },
            answer: {
                  type: DataTypes.STRING,
                  allowNull: false
            },
            deck_id: {
                  type: DataTypes.INTEGER,
                  allowNull: false,
                  references: {
                        model: 'deck',
                        key: 'id'
                  }
            },
      },
      {
            sequelize,
            timestamps: false,
            freezeTableName: true,
            underscored: true,
            modelName: 'card',
      }
);

module.exports = Card;