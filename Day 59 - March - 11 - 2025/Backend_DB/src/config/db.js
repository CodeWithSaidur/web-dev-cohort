// importing mongoose
import mongoose from "mongoose";

// importing dotenv
import dotenv from "dotenv";

// use power of env for using process.env.MONGO_URI
dotenv.config();

// create a async function because DB is another continent >>
// export this function it will import index.js
export const connectDB = async () => {
  // try to connect DB
  try {
    // await for connecting db URI receiving from .env
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true, // 🧠❌
      useUnifiedTopology: true, // 🧠❌
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`); // confirmation massage
  } catch (error) {
    console.error(`Error: ${error.message}`); // what is the reason behind if DB !connect
    process.exit(1); // 🧠❌
  }
};
