function StructuredCopy(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

let a = {
  name: "sabed",
  cls: 10,
};

let b = {
  roll: 1,
  id: 254,
};

let res = StructuredCopy(a, b);

console.log(res);
