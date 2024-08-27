import Member from "./member.js"; // Import the Member constructor

// Constructor function for PremiumMember
function PremiumMember(name, borrowedBooks = []) {
  Member.call(this, name, borrowedBooks); // Call the parent constructor
  this.specialCollectionAccess = true;
}

// Inherit from Member
PremiumMember.prototype = Object.create(Member.prototype);
PremiumMember.prototype.constructor = PremiumMember;

// Override borrowBook method for PremiumMember
PremiumMember.prototype.borrowBook = function (book) {
  if (!(book instanceof Book)) {
    console.log("Invalid book");
    return;
  }

  if (book.isAvailable) {
    if (this.borrowedBooks.length < 5) {
      // Premium members can borrow up to 5 books
      book.isAvailable = false;
      this.borrowedBooks.push(book.title);
      console.log(`${this.name} borrowed "${book.title}" (Premium Member)`);
    } else {
      console.log(`${this.name} cannot borrow more than 5 books`);
    }
  } else {
    console.log(`"${book.title}" is already borrowed`);
  }
};

// Export the PremiumMember constructor function
export default PremiumMember;
