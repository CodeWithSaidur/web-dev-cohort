
class Student {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
  getFullname() {
    return `${this.fname} And ${this.lname}`;
  }
}

let p1 = new Student("Sabed", "bar");
console.log(p1.getFullname());
console.log(p1)

let p2 = new Student("Jabed", "bar");
console.log(p2);
console.log(p2.getFullname());

let p3 = new Student("Aju", "bar");
console.log(p3.getFullname());
console.log(p3);


