/*
    1. create a file 'file-1.txt'
    2. Write 'Hello World! in this file
    3. then create a New file 'file-2.txt'
    4. Copy the Content of 'file-1.txt'
    5. past into 'file-2.txt' with ©️ symbol
*/
const fs = require("fs/promises");

fs.writeFile("file-1.txt", "Hello World!")
  .then(() => {
    console.log("File Created Successfully");
    return fs.readFile("file-1.txt", "utf-8");
  })
  .then((Content) => {
    fs.writeFile("file-2.txt", Content + "©️");
    console.log("Copy and Past Successfully");
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Task Complied ");
  });
