if (!Array.prototype.map2) {
  Array.prototype.map2 = function (cb) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
      let val = cb(this[i], i);
      res.push(val);
    }
    return res;
  };
}

let arr = [1, 2, 3, 4, 5];

let newArr = arr.map2((i) => {
  return i * i;
});

console.log(newArr);
