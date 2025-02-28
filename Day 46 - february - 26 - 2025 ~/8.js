let obj1 = {
  a: 2,
  b: 2,
  add: function () {
    return this.a + this.b;
  },
};

let obj2 = {
  a: 3,
  b: 6,
};

console.log(obj1.add.apply(obj2)); // apply -> Passed individually

console.log(obj1.add.call(obj2)); // call -> Passed as an array

let boundFunction = obj1.add.bind(obj2); // Binds -> Passed individually when calling the returned function
console.log(boundFunction());
