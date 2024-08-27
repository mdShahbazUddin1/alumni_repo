// Define the Person constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Add an introduce method to Person's prototype
Person.prototype.introduce = function () {
  console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
};

// Define the Employee constructor function
function Employee(name, age, jobTitle) {
  // Call the Person constructor function to initialize name and age
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Set up inheritance from Person
Employee.prototype = Object.create(Person.prototype);

// Set the constructor property to Employee
Employee.prototype.constructor = Employee;

// Add a work method to Employee's prototype
Employee.prototype.work = function () {
  console.log(`${this.name} is working as a ${this.jobTitle}.`);
};

// Create an instance of Person
const person = new Person("Alice", 30);

// Create an instance of Employee
const employee = new Employee("Bob", 40, "Software Engineer");

// Call introduce on both instances
person.introduce(); // Output: Hi, my name is Alice and I am 30 years old.
employee.introduce(); // Output: Hi, my name is Bob and I am 40 years old.

// Call work on the Employee instance
employee.work(); // Output: Bob is working as a Software Engineer.
