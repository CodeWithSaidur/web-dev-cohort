if (!Array.prototype.forEach2) {
  Array.prototype.forEach2 = function (cb) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i);
    }
  };
}

let arr = [1, 2, 3, 4, 5];

arr.forEach((e) => {
  console.log(e);
});
