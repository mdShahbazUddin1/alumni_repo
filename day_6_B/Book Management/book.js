// Constructor function for Book
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// Prototype method to get a summary of the book
Book.prototype.getSummary = function () {
  return `${this.title} by ${this.author}, published in ${this.year}`;
};

// Export the Book constructor function
export default Book;
