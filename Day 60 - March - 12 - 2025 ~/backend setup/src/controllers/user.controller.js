// *import model first and understand Schema carefully
import  User  from "../models/user.model.js";
export const saveuser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check request
    if (!name || !email || !password) {
      return res.status(400).json({
        error: "Enter all",
      });
    }

    // save to database
    const newUser = new User({
      name,
      email,
      password,
    });
    await newUser.save();

    res.status(201).json({
      success: true,
      massage: "User save Successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
