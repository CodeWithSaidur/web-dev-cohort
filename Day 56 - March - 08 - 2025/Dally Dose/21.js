function fun_1() {
  let a = 10;
  let b = 20;
  let c = 30;
  let d = 40;
  globalThis.a = a;
  globalThis.b = b;
  globalThis.c = c;
  globalThis.d = d;
  return a, b, c, d;
}
fun_1();
console.log(a);
console.log(b);
console.log(c);
console.log(d);

console.log("______________________________________________________");

function fun_2() {
  let variables = { a1: 10, b1: 20, c1: 30, d1: 40 };
  Object.assign(globalThis, variables);
  return variables;
}

fun_2();
console.log(a1);
console.log(b1);
console.log(c1);
console.log(d1);