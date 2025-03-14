import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/config/db.js";
import saveRouter from "./src/routes/user.routes.js"; // Fix import

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Ensure JSON body parsing
app.use("/api", saveRouter);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
