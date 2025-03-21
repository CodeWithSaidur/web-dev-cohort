const express = require("express");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 3000;

app.get("/api", (req, res) => {
  return res.json(users);
});

// intro to SSR
app.get("/api/user", (req, res) => {
  const html = `
    <ol>
        ${users.map((user) => {
          return `<li>${user.name}</li>`;
        })}
    </ol>
    `;
  res.send(html);
});

// simple post rout
app.post("/api/user", (req, res) => {
  res.json({
    status: "Pending",
  });
});

// get by id
app.get("/api/user/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => {
    user.id === id;
  });
  return res.json(user);
});

// patch matlab Edit i.e edit by id
app.patch("/api/user/:id", () => {
  res.json({
    status: "Pending",
  });
});

// delete matlab Edit i.e edit by id
app.delete("/api/user/:id", () => {
  res.json({
    status: "Pending",
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
