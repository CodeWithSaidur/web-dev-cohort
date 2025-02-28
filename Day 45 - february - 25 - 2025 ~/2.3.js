// Intro to callback

console.log("Start");

sum(10, 20, (ans) => {
  console.log(ans);
});

console.log("End");

function sum(a, b, cb) {
  setTimeout(() => {
    cb(a + b);
  }, 5 * 1000);
}
