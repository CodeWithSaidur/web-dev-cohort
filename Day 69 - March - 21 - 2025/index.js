import express from "express";
import data from "./data.json" assert { type: "json" };
import fs from "fs";

const app = express();
const PORT = 3000;

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app
  //create a route
  .route("/api/v1/data")

  // get req
  .get((req, res) => {
    res.json(data);
  })
  // post req
  .post((req, res) => {
    const body = req.body;
    data.push({ ...body, id: data.length + 1 }); // Add new data with an ID

    // Write updated data back to data.json
    fs.writeFile("./data.json", JSON.stringify(data), (err) => {
      res.json({ data: body });
    });
  });

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
