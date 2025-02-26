const fs = require("fs");

console.log("Start");

fs.readFile("./Example.txt", "utf-8", (err, content) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }
  console.log(content);
});

console.log("Done");

