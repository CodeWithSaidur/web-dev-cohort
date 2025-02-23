// ShoppingCart constructor function
function ShoppingCart() {
    // Initialize items property as an empty array
    this.items = [];
  }
  
  // Add addItem method to ShoppingCart prototype
  ShoppingCart.prototype.addItem = function (price) {
    if (typeof price === 'number' && price > 0) {
      this.items.push(price);
    } else {
      throw new Error('Invalid price. Must be a positive number.');
    }
  };
  
  // Add getTotalPrice method to ShoppingCart prototype
  ShoppingCart.prototype.getTotalPrice = function () {
    return this.items.reduce((total, price) => total + price, 0);
  };
  
  // Example usage
  const cart = new ShoppingCart();
  cart.addItem(50);
  cart.addItem(30);
  console.log(cart.getTotalPrice()); 
  