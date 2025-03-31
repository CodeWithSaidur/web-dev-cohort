import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

// User.models.js
const UserSchema = new mongoose.Schema(
  {
    avatar: {
      type: {
        url: String,
        localPath: String,
      },
      default: {
        url: `https://placehold.co/600x400`,
        localPath: '',
      },
      username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true,
      },
      fullname: {
        type: String,
        required: true,
        trim: true,
      },
      password: {
        type: String,
        required: [true, 'Password required'],
      },
      isEmailVerified: {
        type: Boolean,
        default: false,
      },
      forgotPasswordToken: {
        type: String,
        default: false,
      },
      forgotPasswordExpire: {
        type: Date,
      },
      refreshToken: {
        type: String,
      },
      emailVerificationToken: {
        type: String,
      },
      emailVerificationExpire: {
        type: Date,
      },
    },
  },
  {
    timestamps: true,
  },
);

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

UserSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    },
  );
};

UserSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRE,
    },
  );
};

UserSchema.method.generateTemporaryToken = function () {
  const unHashedToken = crypto.randomBytes(20).toString('hex');

  const hashedToken = crypto.createHash('sha256').update(unHashedToken).digest('hex');
  const tokenExpiry = Date.now() + 20 * 60 * 1000;

  return { hashedToken, unHashedToken, tokenExpiry };
};

export const User = mongoose.model('User', UserSchema);
