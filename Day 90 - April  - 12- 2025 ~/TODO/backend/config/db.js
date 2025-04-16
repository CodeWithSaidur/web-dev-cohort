import mongoose from 'mongoose';

const MAX_RETRIES = 5;
let retries = 0;

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_URI,
      {
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
        autoIndex: false,
      },
    );

    console.log(
      `MongoDB Connected to: ${conn.connection.host} ${conn.connection.port}`,
    );
  } catch (err) {
    console.error(
      `MongoDB Connection Error: ${err.message}`,
    );

    if (retries < MAX_RETRIES) {
      retries++;
      console.log(
        `Retrying connection (retries/MAX_RETRIES)...`,
      );
      setTimeout(connectDB, 5000);
    } else {
      console.error(
        'Maximum retries reached. Exiting process...',
      );
      process.exit(1);
    }
  }
};

mongoose.connection.on('disconnected', () => {
  console.warn(
    'MongoDB Disconnected. Attempting to reconnect...',
  );
  connectDB();
});

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB Error: err`);
  mongoose.disconnect();
});

process.on('SIGINT', async () => {
  console.log('Closing MongoDB connection...');
  await mongoose.connection.close();
  process.exit(0);
});
