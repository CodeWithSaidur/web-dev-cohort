import express from "express";
import { connectDB } from "./config/db.js";
import { router } from "./routes/router.js";

const app = express();

const PORT = 3000;
app.use(express.json());
app.use("/api", router);

app.get("/api", (req, res) => {
  res.send("Hello world!");
});

connectDB();
app.listen(PORT, () => {
  console.log(`click http://localhost:${PORT}`);
});
