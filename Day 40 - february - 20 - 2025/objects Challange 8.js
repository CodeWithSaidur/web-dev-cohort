// You just need to implement the cleanObject function
function cleanObject(obj) {
  // Remove all properties with null or undefined values
  const new_obj = {};

  for (const i in obj) {
    if (obj[i] !== null && obj[i] !== undefined) {
      new_obj[i] = obj[i];
    }
  }
  return new_obj;
}

const obj = {
  a: "name",
  b: null,
  c: undefined,
  d: 10,
};

const arr_to_obj = {};

for (const i in obj) {
  if (obj[i] !== null && obj[i] !== undefined) {
    arr_to_obj[i] = obj[i];
  }
}

console.log("Filtered object:", arr_to_obj);
