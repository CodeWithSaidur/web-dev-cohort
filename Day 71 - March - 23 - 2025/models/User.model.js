import mongoose from "mongoose";
// User.model.js
const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model("User", UserSchema);
