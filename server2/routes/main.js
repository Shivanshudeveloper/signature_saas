const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
// Getting Module
const Card = require("../models/card");

const stripe = require("stripe")(
  "sk_test_51IdwfeH8KzFo5uc9YHKzp2HOPkZJvH0ij0qhWeg0wQ17G73o5fVJYjMkWOfAmWUgjVZe0DesJvrQKbmAPSacXsVP00qMXnEqFr"
);

function isNumeric(str) {
  if (typeof str != "string") return false; // we only process strings!
  return (
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    !isNaN(parseFloat(str))
  ); // ...and ensure strings of whitespace fail
}

// TEST
// @GET TEST
// GET
router.get("/test", (req, res) => {
  res.send("Working");
});

router.get("/getsign", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const { userId } = req.query;
  const getCards = await Card.find({ userId: userId });
  try {
    res.status(201).json(getCards);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

router.post("/save", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
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
});

router.get("/delete/:id", async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const { id: id } = req.params;
  try {
    await Card.findByIdAndDelete(id);
    res.status(201).json({ message: "Card Deleted" });
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
});

module.exports = router;
