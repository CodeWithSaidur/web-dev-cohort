const fs = require("fs");

console.log("Start");

let content = fs.readFileSync("./Example.txt", "utf-8"); // Blocking

console.log(content);

console.log("End");
