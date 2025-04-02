import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.error('DB Connection failed', error);
    process.exit(1);
  }
};

export default connectDB;
