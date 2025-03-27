// emailService.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

// Configure Mailtrap Transporter
const transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER, // Mailtrap Username
    pass: process.env.MAILTRAP_PASS, // Mailtrap Password
  },
});

/**
 * Send Verification Email
 * @param {Object} options - Email details
 */
export const sendVerificationEmail = async ({
  email,
  name,
  verificationToken,
}) => {
  try {
    const verifyLink = `${process.env.BASE_URL}/api/v1/users/verify-email?token=${verificationToken}`;

    const mailOptions = {
      from: '"YourApp Team" <noreply@yourapp.com>',
      to: email,
      subject: "Verify Your Email - YourApp",
      html: `
        <h2>Hello, ${name} 👋</h2>
        <p>Thank you for registering. Please verify your email by clicking the link below:</p>
        <a href="${verifyLink}" target="_blank" style="color:blue;">Verify Email</a>
        <p>If you didn’t request this, please ignore this email.</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Verification email sent to: ${email}`);
  } catch (error) {
    console.error("Error sending verification email:", error);
  }
};
