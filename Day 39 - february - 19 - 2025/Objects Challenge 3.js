function hasDiscount(product) {
  return product.hasOwnProperty("discount");
}

let obj = {
  product: "Laptop",
  discount: 12,
};

let a = hasDiscount(obj);
console.log(a); // true
