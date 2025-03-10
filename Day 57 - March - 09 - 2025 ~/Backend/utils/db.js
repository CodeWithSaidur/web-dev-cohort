import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const db = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Connected!");
    })
    .catch(() => {
      console.log("Not Connected!");
    });
};

export default db;
