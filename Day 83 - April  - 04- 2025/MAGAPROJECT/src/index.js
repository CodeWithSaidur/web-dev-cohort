import app from './app.js';
import dotenv from 'dotenv';
import { connectDB } from './config/Db.js';

// Load environment variables
dotenv.config({
  path: './.env',
});

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(`DB Connectionfield`, e);
    process.exit(1);
  });

console.log(process.env.MONGO_URI);

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world!');
});
