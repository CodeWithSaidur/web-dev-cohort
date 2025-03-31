import app from './app.js';
import dotenv from 'dotenv';
import connectDB from '../db/index.js';

dotenv.config({
  path: './.env',
});

const PORT = process.env.PORT || 3030;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server up on port${PORT}`);
    });
  })
  .catch((err) => {
    console.error('DB Connection Error', err);
    process.exit(1);
  });
