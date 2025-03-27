import express from "express";
import path from "path";
const app = express();

const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/Home", (req, res) => {
  res.render("Home");
});

app.listen(PORT, () => {
  console.log(`click http://localhost:${PORT}`);
});
