let a = 10;
// let a = 11 // not allowed

console.log(++a);

const n = 12;
// console.log(--12); // not allowed

function fnx() {
  console.log(a);
  const PI = 3.14;
  globalThis(PI);
}
fnx();
// console.log(PI);// can not access

function fnx() {
  const PI = 3.14;
  globalThis.PI = PI; //  if i want to access 
}
fnx();
console.log(PI);
