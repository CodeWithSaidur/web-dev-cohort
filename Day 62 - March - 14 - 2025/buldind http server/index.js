const http = require("http");
const url = require("url");

const app = http.createServer((req, res) => {
                                          
  const myurl = url.parse(req.url, true);
  console.log(myurl.query.name);
                                          
  switch (myurl.pathname) {
    case "/":
      res.end("Home");
      break;
    case "/about":
      res.end("This is About");
      break;
    default:
      res.end("Enter Url");
      break;
  }
});

app.listen(3000, () => {
  console.log("Server Start");
});
