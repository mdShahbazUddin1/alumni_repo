// Base constructor function for Product
function Product(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
}

// Method to update quantity
Product.prototype.updateQuantity = function (amount) {
  this.quantity += amount;
  console.log(`${this.name} quantity updated to ${this.quantity}.`);
};

// Method to get product info
Product.prototype.getInfo = function () {
  return `${this.name} - $${this.price} (Quantity: ${this.quantity})`;
};

// Constructor function for Electronics
function Electronics(name, price, quantity, brand, model) {
  Product.call(this, name, price, quantity);
  this.brand = brand;
  this.model = model;
}

// Set up inheritance
Electronics.prototype = Object.create(Product.prototype);
Electronics.prototype.constructor = Electronics;

// Method to power on the electronics
Electronics.prototype.powerOn = function () {
  console.log(`${this.brand} ${this.model} is now powered on.`);
};

// Method to power off the electronics
Electronics.prototype.powerOff = function () {
  console.log(`${this.brand} ${this.model} is now powered off.`);
};

// Constructor function for Clothing
function Clothing(name, price, quantity, size, color) {
  Product.call(this, name, price, quantity);
  this.size = size;
  this.color = color;
}

// Set up inheritance
Clothing.prototype = Object.create(Product.prototype);
Clothing.prototype.constructor = Clothing;

// Method to get clothing details
Clothing.prototype.getClothingDetails = function () {
  return `${this.getInfo()} (Size: ${this.size}, Color: ${this.color})`;
};

// Constructor function for Books
function Books(name, price, quantity, author, ISBN) {
  Product.call(this, name, price, quantity);
  this.author = author;
  this.ISBN = ISBN;
}

// Set up inheritance
Books.prototype = Object.create(Product.prototype);
Books.prototype.constructor = Books;

// Method to get book details
Books.prototype.getBookDetails = function () {
  return `${this.getInfo()} (Author: ${this.author}, ISBN: ${this.ISBN})`;
};

// Create instances of each product type
const laptop = new Electronics("Laptop", 1200, 10, "Dell", "XPS 13");
const tshirt = new Clothing("T-shirt", 20, 50, "M", "Blue");
const book = new Books(
  "JavaScript Essentials",
  30,
  100,
  "John Doe",
  "978-1234567890"
);

// Test Electronics methods
console.log(laptop.getInfo()); // "Laptop - $1200 (Quantity: 10)"
laptop.powerOn(); // "Dell XPS 13 is now powered on."
laptop.powerOff(); // "Dell XPS 13 is now powered off."

// Test Clothing methods
console.log(tshirt.getClothingDetails()); // "T-shirt - $20 (Quantity: 50) (Size: M, Color: Blue)"

// Test Books methods
console.log(book.getBookDetails()); // "JavaScript Essentials - $30 (Quantity: 100) (Author: John Doe, ISBN: 978-1234567890)"

// Update quantity and get info
laptop.updateQuantity(5); // "Laptop quantity updated to 15."
console.log(laptop.getInfo()); // "Laptop - $1200 (Quantity: 15)"
