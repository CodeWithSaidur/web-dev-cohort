import mongoose from "mongoose";
// Todo.model.js
const todoSchema = new mongoose.Schema(
  {
    task: { type: String, required: true },
    dis: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Todo = mongoose.model("Todo", todoSchema);
