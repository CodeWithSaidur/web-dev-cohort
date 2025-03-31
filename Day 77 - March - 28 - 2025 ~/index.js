import express, { Router } from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

const PORT = 3001;

function Request_and_properties() {
  // get body
  app.post("/showBody", (req, res) => {
    res.send(req.body);
    req.end;
  });

  app.get("/showDetail", (req, res) => {
    let data = {
      Host: req.hostname,
      IP: req.ip,
      Method: req.method,
      OriginalUrl: req.originalUrl,
      Path: req.path,
      Protocol: req.protocol,
      Route: req.route ? req.route.path : "N/A",
    };
    res.send(data);
  });

  // conditional rendering
  app.get("/conditionalRendering", (req, res) => {
    if (req.accepts("html")) {
      res.send("<h1>Hello From HTML</h1>");
    } else if (req.accepts("json")) {
      res.send({ massage: "from Json" });
    }
  });

  // get information
  app.get("/getInformation", (req, res) => {
    res.send(req.headers);
  });

  // check request type
  app.get("/checkRequestType", (req, res) => {
    if (req.is("text/html")) {
      res.send("HTML data");
    } else {
      res.send("! HTML Data");
    }
  });
}
Request_and_properties();

// Ejs
app.get("/", (req, res) => {
  let num = [12, 23, 34, 56, 67, 898];
  res.render("index", { message: "Hello World!", num });
});

app.get("/about", (req, res) => {
  let users = [
    { name: "Sabed", age: 25, city: "Hailakandi" },
    { name: "Jabed", age: 25, city: "Hailakandi" },
    { name: "Ajiba", age: 25, city: "Hailakandi" },
    { name: "Yeasmin", age: 25, city: "Hailakandi" },
  ];
  res.render("about", { name: "sabed", users: users });
});

app.get("/form", (req, res) => {
  res.render("form");
});

app.post("/submit", (req, res) => {
  let { Email, password } = req.body;

  console.log(Email);
  console.log(password);

  res.send("Form Sublimer");
});
app.listen(PORT, () => {
  console.log(`click http://localhost:${PORT}`);
});
