let arr = [1, 2, 3, 4, 5, 6];

if (!Array.prototype.forEach2) {
  Array.prototype.forEach2 = function (user_function) {
    const original_array = this;
    for (let i = 0; i < original_array.length; i++) {
      user_function(original_array[i], i);
    }
  };
}

arr.forEach2((e, i) => {
  console.log(e * i);
});

