let arr1 = [10, 20, 30, 40, 50, 60];

let arr2 = [70, 80, 90];

let arr3 = [...arr1, ...arr2];

console.log(arr3);

let arr4 = [14, [844, [7877], 87, 78]];

console.log(arr4.flat(Infinity));

console.log(Array.isArray(arr1));

console.log(Array.from("Saidur"));

let a = 12;
let b = 34;

console.log(Array.of(a, b));
