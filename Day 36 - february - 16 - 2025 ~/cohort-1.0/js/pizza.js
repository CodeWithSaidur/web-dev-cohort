let numberofGuest = -1;

let pizzaSize;

// small <= 2
// medium <= 5
//large

// 5 <= 5

if (-1 <= 2) {
  pizzaSize = "small";
} else if (numberofGuest <= 5) {
  pizzaSize = "medium";
} else {
  pizzaSize = "large";
}

console.log(pizzaSize);
