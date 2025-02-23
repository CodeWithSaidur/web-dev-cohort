// Product constructor function
function Product(name, price, stock) {
  this.name = name;
  this.price = price;
  this.stock = stock;
}

// Method to apply a discount
Product.prototype.applyDiscount = function (percent) {
  if (percent < 0 || percent > 100) return "Invalid discount";
  this.price = Math.round(this.price * (1 - percent / 100));
  return this.price;
};

// Method to purchase a specific quantity
Product.prototype.purchase = function (quantity) {
  if (quantity <= 0) return "Invalid quantity";
  if (quantity > this.stock) return "Not enough stock";
  this.stock -= quantity;
  return `Purchase successful! Remaining stock: ${this.stock}`;
};

// Example usage
const product1 = new Product("Laptop", 1000, 5);

console.log(product1.applyDiscount(10)); // Output: 900 (10% discount applied)
console.log(product1.purchase(3));       // Output: Purchase successful! Remaining stock: 2
console.log(product1.purchase(5));       // Output: Not enough stock
console.log(product1.purchase(0));       // Output: Invalid quantity



