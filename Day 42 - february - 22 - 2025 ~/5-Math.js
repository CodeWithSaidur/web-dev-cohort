// JavaScript provides a built-in Math object that
// contains various methods and properties for
// mathematical operations.

console.log(Math.PI); // return PI value

console.log(Math.abs(-100)); // return Absolute value of given number

console.log(Math.ceil(4.1)); // return Round up value

console.log(Math.floor(4.14)); // return round Down value

console.log(Math.round(56.9));

console.log("__________________________________");

function customRound(number) {
  const decimalPart = number - Math.floor(number); // Extract the decimal part
  if (decimalPart >= 0.8) {
    return Math.ceil(number); // Round up
  } else {
    return Math.floor(number); // Round down
  }
}

console.log(customRound(10.7));

console.log(Math.max(10, 20, 30, 40, 50));

function GetRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log(GetRandomInt(1000, 2000));
