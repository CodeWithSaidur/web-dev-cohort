let arr = ["A", "B", "C", "D"];

arr.push("E");
arr.pop();
arr.shift();
arr.unshift("+A");
console.log(arr.length);
console.log(arr);

let arr1 = ["A", "B", "C", "D"];

arr1.forEach((e) => {
  console.log(e);
});

let arr2 = [1, 2, 3, 4, 5, 6];

let arr3 = arr2.map((i) => {
  return i * 2;
});

console.log(arr3);
