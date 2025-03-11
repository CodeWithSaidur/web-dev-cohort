// index.js
import express from "express";
import dotenv from "dotenv";
import { router } from "./routes/user.routes.js";
import connectDB from "./utils/db.js"

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`click http://127.0.0.1:${PORT}/`);
});
