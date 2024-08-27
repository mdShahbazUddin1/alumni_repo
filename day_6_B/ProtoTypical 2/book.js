// Constructor function for Book
function Book(title, author, isAvailable = true) {
  this.title = title;
  this.author = author;
  this.isAvailable = isAvailable;
}

// Export the Book constructor function
export default Book;
