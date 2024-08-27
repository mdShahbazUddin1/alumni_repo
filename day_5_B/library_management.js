class Book {
  constructor(title, author, year, genre) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.genre = genre;
  }

  getBookInfo() {
    return `${this.title} by ${this.author}, published in ${this.year}. Genre: ${this.genre}.`;
  }
}

// Example usage:
const book1 = new Book("1984", "George Orwell", 1949, "Dystopian");
console.log(book1.getBookInfo()); // 1984 by George Orwell, published in 1949. Genre: Dystopian.

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  // Method to filter books published after a given year
  filterBooksByYear(year) {
    return this.books.filter((book) => book.year > year);
  }

  // Method to return an array of all book titles
  getAllBookTitles() {
    return this.books.map((book) => book.title);
  }

  // Method to calculate the total number of books
  getTotalNumberOfBooks() {
    return this.books.reduce((total, book) => total + 1, 0);
  }

  // Method to calculate the average publication year of all books
  getAveragePublicationYear() {
    const totalYears = this.books.reduce((sum, book) => sum + book.year, 0);
    return totalYears / this.books.length;
  }
}

// Example usage:
const myLibrary = new Library();
myLibrary.addBook(book1);
myLibrary.addBook(
  new Book("To Kill a Mockingbird", "Harper Lee", 1960, "Southern Gothic")
);
myLibrary.addBook(
  new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925, "Tragedy")
);

console.log(myLibrary.filterBooksByYear(1950)); // Returns books published after 1950
console.log(myLibrary.getAllBookTitles()); // Returns an array of all book titles
console.log(myLibrary.getTotalNumberOfBooks()); // Returns the total number of books
console.log(myLibrary.getAveragePublicationYear()); // Returns the average publication year

function createBook(title, author, year, genre) {
  return new Book(title, author, year, genre);
}

// Example usage:
const book2 = createBook("Brave New World", "Aldous Huxley", 1932, "Dystopian");
myLibrary.addBook(book2);
console.log(myLibrary.getAllBookTitles()); // Includes "Brave New World"
