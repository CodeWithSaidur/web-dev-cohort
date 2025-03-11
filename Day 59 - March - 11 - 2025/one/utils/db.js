// utils/db.js
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:");
  }
};

export default db;
