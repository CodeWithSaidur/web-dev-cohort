class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
  getFullname() {
    return `${this.fname} ${this.lname}`;
  }
}

let p1 = new Person("sabed", "barbhuiya");
console.log(p1.getFullname());
