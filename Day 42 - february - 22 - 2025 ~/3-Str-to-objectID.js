/* 

In JavaScript, particularly when working with MongoDB and Mongoose,
you can convert a string to an ObjectId using the 
mongoose.Types.ObjectId method.

*/


const mongoose = require('mongoose');

const objectId = new mongoose.Types.ObjectId("65b8d2c6f4d5d9e1c8a7b123");
console.log(objectId); // Output: ObjectId("65b8d2c6f4d5d9e1c8a7b123")
