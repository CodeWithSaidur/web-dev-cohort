function object_to_array(obj) {
  return Object.entries(obj);
}

let o = {
  name: "sabed",
  roll: 1,
};

console.log(object_to_array(o));
