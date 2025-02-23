// i need to implement the Animal constructor function and its prototype method

function Animal(name) {
  // Initialize name property
  this.name = name;
}

Animal.prototype.makeSound = function () {
  return "Some generic sound";
};

const lion = new Animal('Leo'); 
console.log(lion.makeSound()); 