// 1. Arithmetic Operations
// Used for mathematical calculations:
let sum = 10 + 5; // Addition
let diff = 10 - 5; // Subtraction
let prod = 10 * 5; // Multiplication
let div = 10 / 5; // Division
let mod = 10 % 3; // Modulus (Remainder)
let exp = 2 ** 3; // Exponentiation (2^3 = 8)
console.log("--------------------------------");

// 2. Assignment Operations*
// Used to assign values to variables:
let x = 10;
x += 5; // x = x + 5
x -= 3; // x = x - 3
x *= 2; // x = x * 2
x /= 2; // x = x / 2
x %= 3; // x = x % 3
x **= 2; // x = x ** 2

console.log("----------------------------");

// 3. Comparison Operations
// Used for comparing values:
console.log(10 == "10"); // true  (loose equality, type conversion)
console.log(10 === "10"); // false (strict equality, no type conversion)
console.log(10 != 5); // true  (not equal)
console.log(10 !== "10"); // true  (strict not equal)
console.log(10 > 5); // true  (greater than)
console.log(10 < 5); // false (less than)
console.log(10 >= 10); // true  (greater than or equal)
console.log(10 <= 5); // false (less than or equal)

console.log("----------------------------");

// 4. Logical Operations
// Used to combine conditions:
console.log(true && false); // false (AND)
console.log(true || false); // true  (OR)
console.log(!true); // false (NOT)
console.log("----------------------------");

// 5. Bitwise Operations
// Works on bits of numbers:
console.log(5 & 1); // 1  (AND)
console.log(5 | 1); // 5  (OR)
console.log(5 ^ 1); // 4  (XOR)
console.log(~5); // -6 (NOT)
console.log(5 << 1); // 10 (Left shift)
console.log(5 >> 1); // 2  (Right shift)
console.log(5 >>> 1); // 2  (Unsigned right shift)
console.log("----------------------------");

// 6. String Operations
// String concatenation and manipulation:
let str = "Hello" + " " + "World"; // "Hello World"
console.log("5" + 5); // "55" (String + Number = String)

console.log("----------------------------");

// 7. Ternary (Conditional) Operation
// Short-hand for `if-else`:
let age = 20;
let sta = age >= 18 ? "Adult" : "Minor";
console.log(sta); // "Adult"
console.log("----------------------------");

// 8. Type Operations
// Used to check data types:
console.log(typeof 10); // "number"
console.log(typeof "Hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof {}); // "object"
console.log(typeof []); // "object" (Array is an object)
console.log(typeof null); // "object" (Special case)
console.log(typeof undefined); // "undefined"
