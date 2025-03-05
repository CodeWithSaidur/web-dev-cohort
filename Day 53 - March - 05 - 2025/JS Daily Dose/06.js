// data type
/*
    Primitive
    Non primitive
*/

/*
    primitive => 7 String Number Boolean nul undefine Symbol

    Noncreative => Array Object Function
*/

let fnx = () => {
  console.log("Hello from fnx");
};

console.log(typeof fnx);

// symbol

let sym = Symbol("A1");
console.log(sym);

let Ball = 654456464n;
console.log(typeof Ball);

function add(a, b) {
  return a + b;
}

console.log(add(10, 20));
