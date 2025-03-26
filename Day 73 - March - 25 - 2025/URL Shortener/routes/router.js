import express from "express";
//Import all controllers from controllers
import { shortener } from "../controller/url.controller.js";
export const router = express.Router();

router.post("/short", shortener);
router.get("/short", (req, res) => {
  res.send({
    mag: "GET",
  });
});

