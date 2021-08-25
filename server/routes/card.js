import express from "express";

import { saveCard, getCards } from "../controllers/card.js";

const router = express.Router();

router.post("/save", saveCard);
router.get("/getsign", getCards);

export default router;
