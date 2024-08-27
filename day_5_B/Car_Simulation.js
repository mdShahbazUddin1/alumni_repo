class Car {
  constructor(name, accelerationPower, brakingPower) {
    this.name = name;
    this.accelerationPower = accelerationPower;
    this.brakingPower = brakingPower;
    this.speed = 0; // Initial speed
    this.fuel = 100; // Assume fuel is in percentage
    this.maxFuel = 100; // Maximum fuel capacity
  }

  // Method to accelerate the car
  accelerate() {
    this.speed += this.accelerationPower;
    console.log(`Accelerating: Speed is now ${this.speed} m/s`);
  }

  // Method to apply brakes to the car
  brake() {
    this.speed -= this.brakingPower;
    if (this.speed < 0) this.speed = 0; // Speed should not be negative
    console.log(`Brakes applied: Speed is now ${this.speed} m/s`);
  }

  // Method to check the current speed
  checkSpeed() {
    return this.speed;
  }

  // Method to refuel the car
  refuel() {
    this.fuel = this.maxFuel;
    console.log(`Refueled to maximum capacity.`);
  }

  // Method to simulate driving
  drive(duration, accelerationInterval, brakingInterval) {
    const accelerationDuration = accelerationInterval * 1000; // Convert to milliseconds
    const brakingDuration = brakingInterval * 1000; // Convert to milliseconds

    let elapsedTime = 0;

    const intervalId = setInterval(() => {
      if (elapsedTime < duration) {
        // Accelerate
        this.accelerate();
        elapsedTime += accelerationInterval;

        // Check fuel level
        this.fuel -= this.accelerationPower / 10; // Simple fuel consumption model
        if (this.fuel < 0) {
          this.fuel = 0;
          console.log(`Out of fuel!`);
          clearInterval(intervalId);
          return;
        }

        // Brake
        setTimeout(() => {
          this.brake();
          elapsedTime += brakingInterval;

          // Check fuel level
          this.fuel -= this.brakingPower / 10; // Simple fuel consumption model
          if (this.fuel < 0) {
            this.fuel = 0;
            console.log(`Out of fuel!`);
            clearInterval(intervalId);
            return;
          }
        }, accelerationDuration);
      } else {
        clearInterval(intervalId);
        console.log(
          `Driving session completed. Final speed: ${this.speed} m/s, Fuel level: ${this.fuel}`
        );
      }
    }, accelerationDuration + brakingDuration);
  }
}

// Example usage
const myCar = new Car("Ferrari", 10, 5);
myCar.accelerate();
myCar.brake();
console.log(`Current speed: ${myCar.checkSpeed()} m/s`);
myCar.refuel();
myCar.drive(10, 1, 1); // Drive for 10 seconds with acceleration and braking intervals of 1 second each
