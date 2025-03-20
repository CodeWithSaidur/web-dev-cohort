import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.send(`NAME is ${req.query.name} ID is ${req.query.id}`);
});

app.get("/about", (req, res) => {
  res.send("Hello world!about");
});

app.listen(PORT, () => {
  console.log(`click http://localhost:${PORT}`);
});
