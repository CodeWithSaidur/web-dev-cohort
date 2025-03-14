import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./src/config/db.js";
import messageRoutes from "./src/routes/user.routes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use("/api/messages", messageRoutes);

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`);
});
