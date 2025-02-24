/*
The problem statement
"Calculate the total expenses for each category from the expenses array and 
generate an expense report."
*/

let expenses = [
  { description: "Groceries", amount: 50, category: "Food" },
  { description: "Electricity Bill", amount: 100, category: "Utilities" },
  { description: "Dinner", amount: 30, category: "Food" },
  { description: "Internet Bill", amount: 50, category: "Utilities" },
];

// Category-wise Expenses Report
let Category_wise_Expenses_report = expenses.reduce(
  (accumulator, currentValue) => {
    if (!accumulator[currentValue.category]) {
      accumulator[currentValue.category] = 0;
    }
    accumulator[currentValue.category] += currentValue.amount;
    return accumulator;
  },
  {}
);
console.log(Category_wise_Expenses_report);

// total Amount
let total_amount = expenses.reduce((accumulator, currentValue) => {
  return (accumulator += currentValue.amount);
}, 0);
console.log("total Amount :", total_amount);
