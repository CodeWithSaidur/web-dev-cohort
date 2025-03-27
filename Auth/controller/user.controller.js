// user.controller.js
import crypto from "crypto";
import { sendVerificationEmail } from "../utils/emailService.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
export const registerUser = async (req, res) => {
  try {
    // 1. Destructure and sanitize input
    const { name, email, password } = req.body;

    // 2. Validate required fields
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // 3. Validate email format
    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email format" });
    }

    // 4. Validate password strength
    if (
      !validator.isStrongPassword(password, {
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
      })
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Password must be at least 6 characters with at least one lowercase, one uppercase, and one number",
      });
    }

    // 5. Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(409)
        .json({ success: false, message: "Email already registered" });
    }

    // 6. Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 7. Generate verification token
    const verificationToken = crypto.randomBytes(32).toString("hex");
    const verificationTokenExpire = Date.now() + 24 * 60 * 60 * 1000; // 24 hours

    // 8. Create user in database
    const user = await User.create({
      name: validator.escape(name),
      email: validator.normalizeEmail(email),
      password: hashedPassword,
      verificationToken,
      verificationTokenExpire,
    });

    // 9. Send verification email (via Mailtrap)
    await sendVerificationEmail({
      email: user.email,
      name: user.name,
      verificationToken,
    });

    // 10. Generate JWT token
    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // 11. Response to client
    return res.status(201).json({
      success: true,
      message:
        "Registration successful. Check your email to verify your account.",
      token,
    });
  } catch (error) {
    console.error("Registration error:", error);

    if (error.code === 11000) {
      return res
        .status(409)
        .json({ success: false, message: "Email already exists" });
    }

    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};
