// Problem of  callback
/*
    1. create a file 'file-1.txt'
    2. Write 'Hello World! in this file
    3. then create a New file 'file-2.txt'
    4. Copy the Content of 'file-1.txt'
    5. past into 'file-2.txt' with ©️ symbol
*/

const fs = require("fs");

fs.appendFile("file-1.txt", "Hello World!", (err) => {
  if (err) {
    console.log(`Error ${err}`);
  } else {
    console.log("File Created Successfully");
    fs.readFile("./file-1.txt", "utf-8", (err, con) => {
      if (err) {
        console.log(`Error ${err}`);
      } else {
        fs.writeFile("file-2.txt", con.concat("©️"), () => {
          if (err) {
            console.log(`Error ${err}`);
          } else {
            console.log("Copy and Past Successfully");
          }
        });
      }
    });
  }
});
