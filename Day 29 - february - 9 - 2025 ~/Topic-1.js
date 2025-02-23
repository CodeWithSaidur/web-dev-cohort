// create an object representing a charrecter of ttudent
let stu = {
  name: "Saidur",
  char: "good",
};

// access and print the name and char
console.log(`${stu.name} and ${stu.char}`);
console.log(stu["name"]);

// add a nwe property 'age' to the stu
stu.age = 25;
console.log(stu);

// change the stu chat 'good' to 'bad'
stu.char = "bad";
console.log(stu);

// remove the age properti from the stu
delete stu.age;
console.log(stu);

// chack if the stu property age
console.log("age" in stu);

// use for in loop to print all propertries in stu
const emp = {
  name: "John Doe",
  age: 30,
  position: "Software Engineer",
  salary: 60000,
};

for (let i in emp) {
  console.log(i, emp[i]);
}

// create a object to create a nested object
let obj = {
  a: {
    a: "A",
  },
  b: {
    b: "B",
  },
};
console.log(obj.a.a);

// create a copy of object

let obj1 = {
  a: 10,
  b: {
    c: 20,
  },
};
let sh = {...obj1}
sh.b.c = 50;

console.log(sh);
console.log(obj1);
