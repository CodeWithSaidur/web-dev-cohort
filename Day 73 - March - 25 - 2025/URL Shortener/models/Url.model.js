import mongoose from "mongoose";
// Url.model.js
const UrlSchema = new mongoose.Schema(
  { 
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      required: true,
    },
    visitHistory: {
      timestamps: {
        type: Number,
      },
    },
  },
  {
    timestamps: true,
  }
);

export const Url = mongoose.model("Url", UrlSchema);
