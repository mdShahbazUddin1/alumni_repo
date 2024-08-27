import books from "./books.js"; // Import the array of books

// Use Array.prototype.map to create an array of book summaries
const bookSummaries = books.map((book) => book.getSummary());

// Log the array of book summaries to the console
console.log(bookSummaries);
