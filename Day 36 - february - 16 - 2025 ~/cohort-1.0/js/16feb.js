Function.prototype.describe = function () {
  console.log(`Function name is ${this.name}`);
};

function masalaChai(){}
function gingerChai(){}

function greet(name) {
  return `Hello ${name}`;
}

greet()

greet.describe('hitesh'); // output =>
masalaChai.describe()



function add(a, b){
    return a+b
}

const substract = function(a, b){
    return a-b
}

const multiply = (a, b) => a*b


function applyOperation(a, b, operation){
    return operation(a, b)
}

const result = applyOperation(5, 4, (x, y) => x/y)


function createCounter(){
    let count = 0;
    return function () {
        count++;
        return count
    }
}
//console.log(count);

const counter = createCounter()
console.log(counter());








function onef(){
    let myName = "hitesh"
}

console.log(myName);



(function(){
    console.log("hitesh");
    
})()

()()

(function(){

})()