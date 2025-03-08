const n = 21254543;
console.log(n);

const n1 = new Number(1000);

console.log(n1.toString());
console.log(n1.toString().length);

let n2 = 12.23232;
console.log(n2.toFixed(1));

let n3 = 121.8974;
console.log(n3.toPrecision(3));

let n4 = 10000000;
console.log(n4.toLocaleString("en-IN"));

// +++++++++++++++++++++++ Maths ++++++++++++++++++

console.log(Math.abs(-4554));
console.log(Math.round(121.212));
console.log(Math.ceil(10.4));
console.log(Math.floor(10.4));
console.log(Math.sqrt(5));
console.log(Math.max(45, 85, 88, 78));
console.log(Math.round(Math.random() * 1000 + 1));

const min = 1000;
const max = 9999;
console.log(`OTP ${Math.floor(Math.random() * (max - min + 1)) + min}`);
