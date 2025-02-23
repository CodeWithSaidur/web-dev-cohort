// You need to implement the Counter constructor function and its prototype methods

function Counter() {
    // Initialize count property
    this.count = 0
  }
  
  // Define increment method on Counter's prototype
  Counter.prototype.increment = function () {
    this.count++;
    return this.count;
  }
  // Define decrement method on Counter's prototype
  Counter.prototype.decrement = function () {
    this.count--;
    return this.count;
  }
  
const co = new Counter();
console.log(co.increment()); // test 1

const co2 = new Counter();
console.log(co2.decrement()); // test 3
