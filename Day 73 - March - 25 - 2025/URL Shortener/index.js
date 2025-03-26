import express from "express";
import { router } from "./routes/router.js";
import { connectDB } from "./db/db.js";
import { Url } from "./models/Url.model.js";

const app = express();
const PORT = 3000;

connectDB();
app.use(express.json());
app.use("/url", router);

app.get("/:shortID", async (req, res) => {
  const { shortID } = req.params;

  try {
    const entry = await Url.findOneAndUpdate(
      { shortId: shortID }, 
      { $push: { visitHistory: Date.now() } }, 
      { new: true } // Return updated document
    );

    if (!entry) {
      return res.status(404).json({ message: "Short URL not found" });
    }

    res.redirect(entry.redirectURL);
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
