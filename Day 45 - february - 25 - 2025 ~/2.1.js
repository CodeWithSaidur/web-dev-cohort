const fs = require("fs");

console.log("Start");

fs.readFile("./Example.txt", "utf-8", (err, con) => {
  if (err) {
    console.log(`File reading failed ${err}`);
  } else {
    console.log(con);
  }
});

console.log("End");
