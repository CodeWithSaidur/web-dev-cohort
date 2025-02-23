Array.prototype.map2 = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

let arr = [1, 2, 3, 4];

let a = arr.map2((value, index) => {
  return value * 2;
});

console.log(a);
