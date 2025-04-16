
console.log("1. Start Execution"); // Executes first (synchronous, top-to-bottom)

// Synchronous function
function syncFunction() {
    console.log("2. Synchronous Code Runs");
}
syncFunction();

// Asynchronous: setTimeout (moves to Web APIs, then Event Loop)
setTimeout(() => {
    console.log("5. Timeout Callback Executes (Async)"); // Runs after all sync code
}, 0);

// Using a Promise (Microtask Queue)
Promise.resolve().then(() => {
    console.log("4. Promise Resolved (Microtask Queue)"); // Executes before setTimeout
});

// Callback Function (Passed to another function)
function executeCallback(cb) {
    console.log("3. Inside Function before Callback");
    cb(); // Calling the callback
}
executeCallback(() => console.log("3.1 Callback Function Executed"));

// Event Loop ensures microtasks (like Promises) run before timers
console.log("6. End of Script Execution");
