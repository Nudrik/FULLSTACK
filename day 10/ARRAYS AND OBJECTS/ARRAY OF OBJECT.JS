const products = [
  { id: 1, name: "Laptop", price: 75000, category: "Electronics" },
  { id: 2, name: "Phone", price: 50000, category: "Electronics" },
  { id: 3, name: "Shoes", price: 3000, category: "Fashion" },
  { id: 4, name: "Watch", price: 15000, category: "Accessories" },
  { id: 5, name: "Tablet", price: 40000, category: "Electronics" }
];

// Find all products that belong to the "Electronics" category
const electronicsProducts = products.filter(product => product.category === "Electronics");
console.log("Electronics Products:", electronicsProducts);

// Find the total price of all products
const totalPrice = products.reduce((total, product) => total + product.price, 0);
console.log("Total Price of All Products:", totalPrice);

// Sort the products by price in ascending order
const sortedProducts = [...products].sort((a, b) => a.price - b.price);
console.log("Sorted Products by Price:", sortedProducts);

// Find the most expensive product
const mostExpensiveProduct = products.reduce((max, product) => product.price > max.price ? product : max);
console.log("Most Expensive Product:", mostExpensiveProduct);

// Remove the product with id: 3
const updatedProducts = products.filter(product => product.id !== 3);
console.log("Products after removing id 3:", updatedProducts);
