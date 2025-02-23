let arr = [10, 20, 30, 40, 50];

if (!Array.prototype.filter2) {
  Array.prototype.filter2 = function (cb) {
    let temp = [];
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i], i, this)) {
        temp.push(this[i]);
      }
    }
    return temp;
  };
}

let n = arr.filter2((i) => {
  return i > 15;
});

console.log(n);
console.log(arr);
