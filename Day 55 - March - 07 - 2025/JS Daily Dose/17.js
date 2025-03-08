// singleton

const obj = new Object();

obj.id = 1;
obj.name = "sabed";

console.log(obj);

let obj2 = {
  a: {
    a1: {
      a: 22,
    },
  },
};

let a = {
  a1: 10,
  a2: 20,
};
let b = {
  b1: 10,
  b2: 20,
};

console.log({ ...a, ...b });

let data = [
  {
    id: 1,
    name: "sabed",
  },
  {
    id: 2,
    name: "jabed",
  },
];

console.log(data[1].id);

let c = {
  a: "sabed",
};

console.log(c.hasOwnProperty("a"));
