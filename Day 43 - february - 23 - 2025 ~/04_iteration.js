let salesData = [
  { product: "Laptop", price: 1 },
  { product: "Smartphone", price: 2 },
  { product: "Headphones", price: 2 },
  { product: "Keyboard", price: 1 },
];

let totalSales = salesData.reduce((acc, sale) => acc + sale.price, 0);
console.log(totalSales);

// Items less than 50
let inventory = [
  { name: "Widget A", stock: 30 },
  { name: "Widget B", stock: 120 },
  { name: "Widget C", stock: 45 },
  { name: "Widget D", stock: 70 },
];

let lowStockItems = inventory.filter((item) => {
  return item.stock < 50;
});
// console.log(lowStockItems);

let userActivity = [
  { user: "Alice", activityCount: 45 },
  { user: "Bob", activityCount: 12 },
  { user: "Charlie", activityCount: 33 },
];
// find most active user

let mostActiveUser = userActivity.reduce((maxUser, user) =>
  user.activityCount > maxUser.activityCount ? user : maxUser
);
// console.log(mostActiveUser);

let expenses = [
  { description: "Groceries", amount: 50, category: "Food" },
  { description: "Electricity Bill", amount: 100, category: "Utilities" },
  { description: "Dinner", amount: 30, category: "Food" },
  { description: "Internet Bill", amount: 50, category: "Utilities" },
];

let expenseReport = expenses.reduce(
  (report, expense) => {
    report[expense.category] += expense.amount;
    // report[expense.category] = (report[expense.category] || 0) + expense.amount;

    return report;
  },
  { Food: 0, Utilities: 0 }
);

// console.log("Expense Report", expenseReport);

let tasks = [
  { description: "Write report", completed: false, priority: 2 },
  { description: "Send email", completed: true, priority: 3 },
  { description: "Prepare presentation", completed: false, priority: 1 },
];

let pendingSortedTasks = tasks
  .filter((task) => !task.completed)
  .sort((a, b) => a.priority - b.priority);

// console.log(pendingSortedTasks);

let movieRatings = [
  { title: "Movie A", ratings: [4, 5, 3] },
  { title: "Movie B", ratings: [5, 5, 4] },
  { title: "Movie C", ratings: [3, 4, 2] },
];

let averageRatings = movieRatings.map((movie) => {
  let total = movie.ratings.reduce((sum, rating) => sum + rating, 0);
  let average = total / movie.ratings.length;
  //   movie.ratings = average;
  //   return movie;
  return { title: movie.title, ratings: average.toFixed(2) };
});
console.log(averageRatings);
console.log(movieRatings);

[{ title: "Movie A", ratings: 3.3 }, {}];
