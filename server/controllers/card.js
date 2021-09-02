import Card from "../models/card.js";

export const getCards = async (req, res) => {
  const { userId } = req.query;
  const getCards = await Card.find({ userId: userId });
  try {
    res.status(201).json(getCards);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const saveCard = async (req, res) => {
  const { text, userId } = req.body;
  const newCard = new Card({
    cardHTML: text,
    userId,
    createdAt: new Date().toISOString(),
  });
  try {
    await newCard.save();
    const allCards = await Card.find({ userId: userId });
    res.status(201).json(allCards);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
