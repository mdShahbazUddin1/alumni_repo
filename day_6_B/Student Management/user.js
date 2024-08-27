// Define the User class
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  // Method to get user details
  getDetails() {
    console.log(`Name: ${this.name}, Email: ${this.email}`);
  }
}

// Export the User class
export default User;
