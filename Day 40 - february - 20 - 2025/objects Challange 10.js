// You just need to implement the getNestedValue function
function getNestedValue(obj, keyPath) {
  // Return the value from the nested object based on keyPath
  return keyPath
    .split(".")
    .reduce(
      (acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined),
      obj
    );
}

// Example usage
const data = {
  user: {
    profile: {
      name: "John Doe",
      age: 30,
    },
  },
};

console.log(getNestedValue(data, "user.profile.name")); // Output: 'John Doe'
console.log(getNestedValue(data, "user.profile.age")); // Output: 30
console.log(getNestedValue(data, "user.address")); // Output: undefined
