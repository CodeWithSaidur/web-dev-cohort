import express from "express";
import { registerUser } from "../controller/user.controller.js";
//Import all controllers from controllers

export const router = express.Router();

router.post("/register", registerUser);
router.get("/register", (req, res) => {
  res.send("This is a Get Request Copy URL then Send Post Request");
});
