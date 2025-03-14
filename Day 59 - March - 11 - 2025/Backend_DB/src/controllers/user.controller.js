import { Message } from "../models/user.model.js";

// Controller to save a message
export const saveMessage = async (req, res) => {
  try {
    const { name, message } = req.body;

    // Validate request
    if (!name || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Save to database
    const newMessage = new Message({ name, message });
    await newMessage.save();

    res
      .status(201)
      .json({ success: true, message: "Message saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller for GET request response
export const getMessageInfo = (req, res) => {
  res.send("It is a POST request");
};
