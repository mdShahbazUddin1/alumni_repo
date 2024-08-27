import User from "./user.js"; // Import the User class

// Define the Student class that extends User
class Student extends User {
  constructor(name, email, studentId) {
    super(name, email); // Call the parent class constructor
    this.studentId = studentId;
  }

  // Method for student enrollment
  enroll() {
    console.log(`Student ${this.name} has enrolled.`);
  }
}

// Export the Student class
export default Student;
