function Fnx1(params) {
  let a = 0;

  return function () {
    a++;
    return a;
  };
}

let n = Fnx1();

console.log(n());
console.log(n());
console.log(n());
