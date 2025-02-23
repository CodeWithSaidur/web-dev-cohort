let arr = [1, 2, 3, 4, 5];

arr.forEach((i) => console.log(i));

Array.prototype.forEach2 = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i]);
  }
};

arr.forEach2((i) => console.log(i));
