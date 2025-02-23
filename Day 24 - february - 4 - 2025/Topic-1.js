console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(1 / 0);
console.log(0 / 0);

let n = Number("1211");
console.log(typeof n);

console.log(parseInt("123.12"));
console.log(parseFloat("123.12"));

console.log(isFinite(Infinity));
console.log(isNaN(0 / 0));

let num = 123.456;
console.log(num.toFixed(2));
console.log((255).toString(2));
console.log(num.toPrecision(4));
console.log(num.toExponential(2));
