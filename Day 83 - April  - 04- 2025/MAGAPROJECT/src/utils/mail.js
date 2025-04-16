import Mailgen from 'mailgen';
import nodemailer from 'nodemailer';

const sendMail = async (options) => {
  const mailGenerator = new Mailgen({
    theme: 'default',
    product: {
      name: 'Task Manager',
      link: 'https://mailgen.js/',
    },
  });

  const emailText = mailGenerator.generatePlaintext(
    options.mailGenContent
  );
  const emailHtml = mailGenerator.generate(
    options.mailGenContent
  );

  const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_SMTP_HOST,
    port: process.env.MAILTRAP_SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.MAILTRAP_SMTP_USER,
      pass: process.env.MAILTRAP_SMTP_PASS,
    },
  });

  const mail = {
    from: '"Task Manager"', // update this as needed
    to: options.email,
    subject: options.subject,
    text: emailText,
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mail);
    console.log('Email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error.message);
  }
};

const emailVerificationMailGenContent = (
  username,
  verificationUrl
) => {
  return {
    body: {
      name: username,
      intro: 'Welcome to the App!',
      action: {
        instructions:
          'To get started with your account, click below:',
        button: {
          color: '#48cfad',
          text: 'Confirm your account',
          link: verificationUrl,
        },
      },
    },
  };
};

const forgotPasswordMailGenContent = (
  username,
  passwordResetUrl
) => {
  return {
    body: {
      name: username,
      intro: 'You requested a password reset.',
      action: {
        instructions:
          'Click the button below to reset your password:',
        button: {
          color: '#48cfad',
          text: 'Reset Password',
          link: passwordResetUrl,
        },
      },
    },
  };
};

// Example usage:
/*
sendMail({
  email: user.email,
  subject: 'Email Verification',
  mailGenContent: emailVerificationMailGenContent(user.name, 'https://example.com/verify'),
});
*/
