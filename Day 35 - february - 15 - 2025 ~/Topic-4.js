const obj1 = {
  fname: "Sabed",
  lname: "bar",
  getFullname() {
    return `${this.fname} ${this.lname}`;
  },
};
    
//  we are Violation Coding principal     'DRY'

const obj2 = {
  fname: "Aju",
  lname: "bar",
};
obj2.__proto__ = obj1;  // proto type Chaining

console.log(obj2.getFullname());
