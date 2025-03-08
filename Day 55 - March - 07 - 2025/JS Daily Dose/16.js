
let symbol = Symbol("^")

let obj = {
  name: "sabed",
  [symbol] : "This is a Symbol",
  cls: 12,
  roll: 4,
  all: function () {
    return `${this.cls} ${this.name}`;
  },
};

console.log(obj.all());

console.log(obj[symbol]);
 