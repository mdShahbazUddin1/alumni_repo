import Book from "./book.js"; // Import the Book constructor

// Constructor function for Member
function Member(name, borrowedBooks = []) {
  this.name = name;
  this.borrowedBooks = borrowedBooks;
}

// Method to borrow a book
Member.prototype.borrowBook = function (book) {
  if (!(book instanceof Book)) {
    console.log("Invalid book");
    return;
  }

  if (book.isAvailable) {
    if (this.borrowedBooks.length < 3) {
      book.isAvailable = false;
      this.borrowedBooks.push(book.title);
      console.log(`${this.name} borrowed "${book.title}"`);
    } else {
      console.log(`${this.name} cannot borrow more than 3 books`);
    }
  } else {
    console.log(`"${book.title}" is already borrowed`);
  }
};

// Export the Member constructor function
export default Member;
