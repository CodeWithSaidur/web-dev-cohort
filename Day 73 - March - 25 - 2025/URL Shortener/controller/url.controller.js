import { Url } from "../models/Url.model.js";
import { nanoid } from "nanoid"; // npm 

export const shortener = async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({
      message: "Enter URL first",
    });
  }

  const shortId = nanoid(8);

  try {
    // Save to database
    await Url.create({
      shortId,
      redirectURL: url,
      visitHistory: [],
    });

    return res.json({
      id: shortId,
      shortUrl: `${req.protocol}://${req.get("host")}/${shortId}`,
    });

  } catch (error) {
    console.error("Database error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
