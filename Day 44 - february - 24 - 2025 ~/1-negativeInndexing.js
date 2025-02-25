let arr = [10, 20, 30, 40, 50];

// console.log(arr[-1]);  // polyfill for negative indexing

function Negative_Index(arr) {
  return new Proxy(arr, {
    get(target, prop) {
      const index = Number(prop);
      if (index < 0) {
        return target[target.length + index];
      }
      return target[index];
    },
    set(target, prop, value) {
      const index = Number(prop);
      if (index < 0) {
        target[target.length + index] = value;
      } else {
        target[index] = value;
        return true;
      }
    },
  });
}

let newArr = Negative_Index(arr);

console.log(newArr[-1]);
newArr[-1] = 100;

console.log(arr);
