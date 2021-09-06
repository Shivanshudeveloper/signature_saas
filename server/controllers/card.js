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

export const deleteCard = async (req, res) => {
  const { id: id } = req.params;
  try {
    await Card.findByIdAndDelete(id);
    res.status(201).json({ message: "Card Deleted" });
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
};
