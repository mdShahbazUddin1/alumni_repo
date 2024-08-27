import User from "./user.js"; // Import the User class

// Define the Instructor class that extends User
class Instructor extends User {
  constructor(name, email, instructorId) {
    super(name, email); // Call the parent class constructor
    this.instructorId = instructorId;
  }

  // Method for assigning grades
  assignGrade() {
    console.log(`Instructor ${this.name} assigned a grade.`);
  }
}

// Export the Instructor class
export default Instructor;
