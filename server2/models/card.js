const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
  cardHTML: String,
  userId: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;