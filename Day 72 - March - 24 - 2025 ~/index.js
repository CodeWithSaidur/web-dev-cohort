const fs = require("fs");

setTimeout(() => console.log(" 1 Set Timeout 2"), 1000); // 2

setImmediate(() => console.log(" 2 Set Immediate 3")); // 3

fs.readFile("abc.txt", "utf-8", function (err, data) {
  setTimeout(() => console.log(" 3 Set Timeout Inside FS 5"), 1000); // 5
  setImmediate(() => console.log(" 4 Set Immediate inside fs 4")); // 4
});

console.log(" 5 Hello World! 1"); // 1
