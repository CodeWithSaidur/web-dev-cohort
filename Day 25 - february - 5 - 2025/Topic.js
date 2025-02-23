let arr = [10, 20, 30, 40, 50];

console.log(arr[0]);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

let obj = {
  name: "Saidur rohman barbhuiya",
  cls: "BCA 1st Sem",
  roll: 39,
  sec: "A",
};

for (const key in obj) {
  console.log(`${key} is ${obj[key]}`);
}

