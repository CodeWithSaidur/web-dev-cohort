function greet(name) {
  console.log(`Hello ${name}`);
}

// greet("Hitesh");
// greet("Piyush");

let globalVar = "I am global";

function modifyGlobal() {
  globalVar = "I am modified";
  let blockScopedVar = "I am blocked-scoped";
  console.log(blockScopedVar);
}

// modifyGlobal();

let config = (function () {
  let settings = {
    theme: "dark",
  };
  return settings;
})();

let person1 = {
  personsName: "ravi",
  greet: function () {
    console.log(`Hello, ${this.personsName}`);
  },
};

let person2 = {
  personsName: "hitesh",
};

person1.greet.call(person2);
