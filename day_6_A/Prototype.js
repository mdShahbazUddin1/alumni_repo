// 1. Define the Animal constructor function
function Animal() {
  this.type = "Animal";
}

// 2. Add a method to Animal.prototype
Animal.prototype.sound = function () {
  console.log("Animal sound");
};

// 3. Define the Dog constructor function
function Dog() {
  // Call the Animal constructor function
  Animal.call(this);
  this.type = "Dog";
}

// 4. Ensure Dog.prototype inherits from Animal.prototype
Dog.prototype = Object.create(Animal.prototype);

// Set the constructor property to Dog
Dog.prototype.constructor = Dog;

// 5. Override the sound method in Dog.prototype
Dog.prototype.sound = function () {
  console.log("Bark");
};

// 6. Create an instance of Dog
const myDog = new Dog();

// 7. Call the sound method on myDog
myDog.sound(); // Should log "Bark"
