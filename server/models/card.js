import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
  cardHTML: String,
  userId: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Card = mongoose.model("Card", cardSchema);

export default Card;
