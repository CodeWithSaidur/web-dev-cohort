import express from "express";

const app = express();

const PORT = 3001;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/user/:name/:id", (req, res) => {
  console.log(req.params);

  let name = req.params.name;
  let userId = req.params.id;

  res.json({
    name: userId,
  });
});

app.get("/search", (req, res) => {
  console.log(req.query);
  res.send(`Name is ${req.query.name}`);
});

app.get("/send_data", (req, res) => {
  let data = {
    name: "sabed",
    age: 26,
  };
  res.send(data);
});

app.set("view engine", "ejs");
app.get("/view/user", (req, res) => {
  res.render("index");
});

app.get("/download", (req, res) => {
    res.download('./doc/file.txt')
});

app.listen(PORT, () => {
  console.log(`click http://localhost:${PORT}`);
});
