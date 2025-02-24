/*
The problem statement
"Find the user with the highest activity count from the userActivity array."
*/
let userActivity = [
  { user: "Alice", activityCount: 45 },
  { user: "Bob", activityCount: 12 },
  { user: "Charlie", activityCount: 33 },
];

let mostActiveUser = userActivity.reduce((maxUser, user) => {
  return user.activityCount > maxUser.activityCount ? user : maxUser;
});

console.log(mostActiveUser);
