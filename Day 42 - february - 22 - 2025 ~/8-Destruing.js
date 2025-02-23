let arr = [10, 20, 30];

let [a, b, c] = arr;

console.log(c);

const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

console.log(first);
console.log(second);
console.log(rest);

// swapping 2 variable

let s1 = 10;
let s2 = 20;

[s1, s2] = [s2, s1];

console.log(s2);
