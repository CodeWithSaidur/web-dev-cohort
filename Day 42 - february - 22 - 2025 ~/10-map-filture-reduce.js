// map
// make all element in upper case
let arr1 = ["a", "b", "c"];

let ans1 = arr1.map((i) => {
  return i.toUpperCase();
});

console.log(ans1);


// cut 2% from their salary 
let Emp = {
  Emp1: { name: "Harry", sel: 10 },
  Emp2: { name: "Hytash", sel: 10 },
  Emp3: { name: "Pyoush", sel: 10 },
};

// Reduce salary by 2% and update the object
Object.values(Emp).forEach((emp) => {
  emp.sel -= emp.sel * 0.50; // Reduce 2%
});

console.log(Emp);
