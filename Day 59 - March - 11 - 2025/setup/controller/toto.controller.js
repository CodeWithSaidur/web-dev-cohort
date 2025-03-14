// *import model first and understand Schema carefully
import { Todo } from "../models/Todo.model";

export const save_todo = async (req, res) => {
  try {
    const { task, dis } = req.body;

    //   validate request
    if (!task || !dis) {
      return res.status(400).json({ error: "All fields are require" });
    }

    //   save to db
    const newTodo = new Todo({ task, dis });
    await newTodo.save();

    res.status(201).json({
      success: true,
      massage: "To Save Successfully",
    });
  } catch (error) {
    res.status(500),
      json({
        error: "Internal Server Error",
      });
  }
};
