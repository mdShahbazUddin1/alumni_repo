import Book from "./book.js";
import Member from "./member.js";
import PremiumMember from "./premiumMember.js";

// Create book objects
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
const book2 = new Book("1984", "George Orwell");
const book3 = new Book("To Kill a Mockingbird", "Harper Lee");
const book4 = new Book("Moby Dick", "Herman Melville");
const book5 = new Book("The Catcher in the Rye", "J.D. Salinger");
const book6 = new Book("Pride and Prejudice", "Jane Austen");

// Create regular and premium members
const regularMember = new Member("Alice");
const premiumMember = new PremiumMember("Bob");

// Regular member borrowing books
regularMember.borrowBook(book1); // Should succeed
regularMember.borrowBook(book2); // Should succeed
regularMember.borrowBook(book3); // Should succeed
regularMember.borrowBook(book4); // Should fail (more than 3 books)

// Premium member borrowing books
premiumMember.borrowBook(book1); // Should succeed
premiumMember.borrowBook(book2); // Should succeed
premiumMember.borrowBook(book3); // Should succeed
premiumMember.borrowBook(book4); // Should succeed
premiumMember.borrowBook(book5); // Should succeed
premiumMember.borrowBook(book6); // Should fail (more than 5 books)

// Bind example for borrowing books
const borrowBookForRegular = regularMember.borrowBook.bind(regularMember);
borrowBookForRegular(book6); // Should fail (more than 3 books)

// Output book availability status
console.log(book1);
console.log(book2);
console.log(book3);
console.log(book4);
console.log(book5);
console.log(book6);
