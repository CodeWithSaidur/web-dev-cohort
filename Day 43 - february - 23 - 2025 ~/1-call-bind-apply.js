let stu1 = {
  f_Name: "Piclu",
  l_name: "Barbhuiya",
  fullName: function (age) {
    return `Name :${this.f_Name} ${this.l_name} Age ${age}`;
  },
};

let stu2 = {
  f_Name: "sabed",
  l_name: "barbhuiya",
};

// call method
console.log(stu1.fullName.call(stu2, 25));

// apply method
console.log(stu1.fullName.apply(stu2, [25]));

// bind method 
let res = stu1.fullName.bind(stu2, 25);
console.log(res());
