const sym = Symbol("A1");

let obj = {
  name: "sabed",
  id: 1,
  login: true,
  coerces: ["html", "css", "js"],
  [sym]: sym,
};

obj.Nid = 12;

obj.hello = (n) => {
  return `Hello ${n}`;
};

console.log(obj.coerces);
console.log(obj.name);
console.log(obj[sym]);
console.log(obj.Nid);
console.log(obj.hello("sabed"));
