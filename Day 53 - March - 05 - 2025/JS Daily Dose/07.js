/*
    Memory
    2 Types of Memory
        Stack Memory => Primitive
        Heap Memory => Non Primitive
*/

let a = 121; // will store in stack memory

let arr = [120, 578, 2 + 7]; // will store in Heap Memory

// Stack
let name_ = "Sabed";
let officialName_ = name_;
officialName_ = "saidur";
console.log(name_);
console.log(officialName_);
// all primitive data types stores in stack its give Copy

// Heap
let coder = {
  name_: "Saidur",
};
console.log(coder.name_);
coder.name_ = "Jabed";
console.log(coder.name_);
// all Non primitive data types stores in Heap its give reference
