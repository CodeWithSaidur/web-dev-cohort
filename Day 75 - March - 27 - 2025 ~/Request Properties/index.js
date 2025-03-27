import express from "express";


const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/send", (req, res) => {
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`click http://localhost:${PORT}`);
});
