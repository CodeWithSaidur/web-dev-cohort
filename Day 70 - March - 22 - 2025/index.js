import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;

// middleware
app.use((req, res, next) => {
  console.log("Middle ware 1");
  req.name = "sabed";
  next();
});

// builtin middleware
app.use(express.json());

// middleware
app.use((req, res, next) => {
  console.log("Middle ware 2", req.name);
  next();
});

// headers
app
  .route("/api/data")
  .get((req, res) => {
    console.log(req.headers); // Logs request headers
    console.log(res.getHeaders()); // Logs response headers (before sending response)
    res.send("Hello world!");
  })

  
  // Statuscode
  .post((req, res) => {
    console.log(req.body);
    return res.status(200).json({
      massage: "OK",
    });
  });

app.listen(PORT, () => {
  console.log(`click http://localhost:${PORT}`);
});
