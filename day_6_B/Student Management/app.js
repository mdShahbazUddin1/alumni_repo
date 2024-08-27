import Student from "./student.js"; // Import the Student class
import Instructor from "./instructor.js"; // Import the Instructor class

// Create a Student instance
const student = new Student(
  "Alice Johnson",
  "alice.johnson@example.com",
  "S12345"
);
student.getDetails(); // Output: Name: Alice Johnson, Email: alice.johnson@example.com
student.enroll(); // Output: Student Alice Johnson has enrolled.

// Create an Instructor instance
const instructor = new Instructor(
  "Dr. Bob Smith",
  "bob.smith@example.com",
  "I67890"
);
instructor.getDetails(); // Output: Name: Dr. Bob Smith, Email: bob.smith@example.com
instructor.assignGrade(); // Output: Instructor Dr. Bob Smith assigned a grade.
