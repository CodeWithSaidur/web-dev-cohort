// routers
import express from "express";
import { X } from "../controller/user.controller.js";

export const router = express.Router();
router.post("/register", X);

router.get("/register", (req, res) => {
  res.send("<h1>IT Not a GET REQUEST</h1>");
});
