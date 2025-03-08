function add(a, b) {
  return a + b;
}

console.log(add(12, 23));

let res = add(78, 77);

console.log(res);

// rest operator
function mul(...n) {
  let ans = 1;
  for (let i = 0; i < n.length; i++) {
    ans = ans * n[i];
  }
  return ans;
}

console.log(mul(10, 20));
console.log(mul(1, 2, 3, 4, 5, 6, 7, 8, 9));

// pass object as param

function fnx_obj(param_obj) {
  return `${param_obj.a} and ${param_obj.b}`;
}

let obj = {
  a: 10,
  b: 20,
};

console.log(fnx_obj(obj));
