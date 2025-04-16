import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import router from './routers/todo.route.js';
dotenv.config({});

const app = express();
app.use(express.json()); // ✅ Fixed middleware

const PORT = process.env.PORT || 3000;

connectDB();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.use('/api/v1', router);

app.listen(PORT, () => {
  console.log(`click http://localhost:${PORT}`);
});
