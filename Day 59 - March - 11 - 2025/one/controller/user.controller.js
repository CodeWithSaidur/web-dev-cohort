// controller/user.controller.js
import User from "../models/User.model.js";
import crypto from "crypto";
import nodemailer from "nodemailer";

export const X = async (req, res) => {
  // get data
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      message: "Please provide username, email, and password",
    });
  }

  // check if user exists and create new user
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Create new user
    const user = await User.create({
      username,
      email,
      password,
      isActive: true,
    });

    if (!user) {
      return res.status(400).json({
        message: "User registration failed",
      });
    }
    // create a verification token
    const token = crypto.randomBytes(32).toString("hex");
    user.verificationToken = token;
    await user.save();

    // console.log(token);

    // send  email

    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });

    const mailOption = {
      from: "", // sender address
      to: user.email, // list of receivers
      subject: "Email Verification ✔", // Subject line
      text: ``, // plain text body
    };

    // Return success response
  } catch (error) {
    console.error("Registration error:", error);
  }
};
