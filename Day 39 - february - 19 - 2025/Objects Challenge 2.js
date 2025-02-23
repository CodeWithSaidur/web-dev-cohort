function addCarColor(car, color) {
  // Validate car object and required properties
  if (typeof car !== "object" || !car.brand) {
    return "Invalid car object";
  }

  // Validate color input
  if (typeof color !== "string" || color.trim() === "") {
    return "empty color";
  }

  // Add color property to the car object
  car.color = color;
  return car;
}

const myCar = { brand: "Toyota", model: "Camry" };
console.log(addCarColor(myCar, "red")); // { brand: 'Toyota', model: 'Camry', color: 'red' }

console.log(addCarColor({}, "blue")); // 'Invalid car object'
console.log(addCarColor(myCar, "")); // 'empty color'
