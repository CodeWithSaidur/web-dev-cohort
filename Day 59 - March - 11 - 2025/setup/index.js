import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/DB.js";

const app = express();
dotenv.config();
connectDB();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, () => {
  console.log(`click http: //localhost:${PORT}`);
});
