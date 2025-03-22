import express from "express";
import { registerUser } from "../controller/user.controller.js";

export const router = express.Router();

router.post("/save", registerUser);
