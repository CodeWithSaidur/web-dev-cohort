// some() Method
// check is name exist in an Array  // Checks if any element passes a test
let names = ["sabed", "jabed", "Aju"];

let res = names.some((name) => {
  return name === "Aju";
});
// console.log(res);

// every() Method // 	Checks if all elements pass a test
let arr2 = [1, 2, 3, 4, 5, -6, 7, 8, 9];
let res2 = arr2.every((i) => {
  return i > 0;
});

// console.log(`${res2 ? "Yes" : "No"} This Array Contains All positive Number.`);

// findIndex() Returns the index of the first matching element
let arr3 = ["Apple", "ball", "cat", "ball"];

console.log(
  `${arr3.findIndex((i) => {
    return i === "cat";
  })}`
);

console.log(
  `${arr3.find((i) => {
    return i === "cat";
  })}`
);
