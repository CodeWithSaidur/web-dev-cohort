function add(a, b) {
  return a + b;
}

const sub = function (a, b) {
  return a - b;
};

const mul = (a, b) => {
  return a / b;
};

function operation(a, b, operator) {
  return operator(a, b);
}

console.log(operation(10, 20, (a, e) => a + e)); // first class function

function Create_Counter() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}

const count = Create_Counter();
console.log(count());

(function () {
  console.log("Sabed Barbhuiya");
})();
