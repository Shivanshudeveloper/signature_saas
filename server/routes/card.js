import express from "express";

import { saveCard, getCards, deleteCard } from "../controllers/card.js";

const router = express.Router();

router.post("/save", saveCard);
router.get("/getsign", getCards);
router.delete("/delete/:id", deleteCard);

export default router;
