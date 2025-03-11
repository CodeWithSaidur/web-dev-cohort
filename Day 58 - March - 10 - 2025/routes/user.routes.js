import express from "express";
import { userRegistration } from "../controller/user.controller.js";

const router = express.Router();

router.post("/register", userRegistration);

export default router;
