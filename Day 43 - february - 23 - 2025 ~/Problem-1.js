/*
Problem Statement:
Given an array of objects representing sales data, where each object contains a 
product name and its price, write a JavaScript program to calculate the total 
sales revenue by summing up the prices of all products in the array.
*/

let sales_data = [
  {
    Item1: "Apple",
    Price: 25,
  },
  {
    Item2: "Ball",
    Price: 20,
  },
  {
    Item2: "Jam",
    Price: 30,
  },
];

// (accumulator, currentValue) => accumulator + currentValue.price

let total_price = sales_data.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.Price;
}, 0);

console.log(total_price);
