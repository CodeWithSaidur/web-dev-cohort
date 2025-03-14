import express from "express";
import { saveMessage, getMessageInfo } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/send", saveMessage);
router.get("/send", getMessageInfo);

export default router;
