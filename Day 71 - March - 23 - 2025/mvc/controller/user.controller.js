// user.controller.js
import { User } from "../models/User.model.js";

export const registerUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    const newUser = new User({ name, email });

    await newUser.save();

    res.status(201).json({
      massage: "User register",
    });
    
  } catch (error) {
    res.status(500).json({
      massage: error,
    });
  }
};
