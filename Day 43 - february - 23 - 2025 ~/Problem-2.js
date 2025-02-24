/*
The problem statement
"Filter out items from the inventory that have a stock count of less than 50."
*/

let inventory = [
  {
    name: "Item 1",
    stock: 55,
  },
  {
    name: "Item 2",
    stock: 40,
  },
  {
    name: "Item 3",
    stock: 51,
  },
];

let Less_then_50 = inventory.filter((i) => {
  return i.stock < 50;
});

console.log(Less_then_50);
