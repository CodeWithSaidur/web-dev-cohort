let arr = [10, 20, 30, 40, 55];

if (!Array.prototype.map2) {
  Array.prototype.map2 = function (ur) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
      const val = ur(this[i], i);
      result.push(val);
    }

    return result;
  };
}

let mp = arr.map2((i) => {
  return i * 3;
});

console.log(mp);
