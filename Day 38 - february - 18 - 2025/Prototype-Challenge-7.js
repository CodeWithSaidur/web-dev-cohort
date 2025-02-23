// Employee constructor function
function Employee(name, position, salary) {  
    this.name = name;
    this.position = position;
    this.salary = salary;
}

// Apply bonus method (bonus in percent)
Employee.prototype.applyBonus = function(bonus) { 
    this.salary += (this.salary * bonus) / 100; // Calculate bonus amount
};

const employee = new Employee("Alice", "Developer", 50000);
employee.applyBonus(10); // 10% bonus
console.log(employee.salary); // 55000


// ref
let sal = 50
let bon = 50  // bonus in percentage
console.log((sal*bon)/100);

