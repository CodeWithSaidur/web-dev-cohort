import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import { router } from "./routes/user.routes.js";

dotenv.config();

const app = express();
connectDB();

app.use(
  cors({
    origin: "http://localhost:3030",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/api/v1/user", router);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
