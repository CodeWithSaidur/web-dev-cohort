// Import the Todo model first
import { Todo } from '../models/todo.model.js';

// Controller to save a new todo
export const saveTodo = async (req, res) => {
  try {
    const { title, description, completed } = req.body;

    // Validate required field
    if (!title) {
      return res
        .status(400)
        .json({ message: 'Title is required' });
    }

    // Create a new Todo document
    const newTodo = new Todo({
      title,
      description,
      completed,
    });

    // Save to database
    const savedTodo = await newTodo.save();

    res.status(201).json(savedTodo); // Respond with saved todo
  } catch (error) {
    console.error('Error saving todo:', error);
    res.status(500).json({ message: 'Server Error' });
  }
};
