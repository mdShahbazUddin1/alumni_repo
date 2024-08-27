function Car(make, model, year, isAvailable = true) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.isAvailable = isAvailable;
}

function Customer(name, rentedCars = []) {
  this.name = name;
  this.rentedCars = rentedCars;
}

Customer.prototype.rentCar = function (car) {
  if (car.isAvailable) {
    car.isAvailable = false;
    this.rentedCars.push(car);
    console.log(`${this.name} rented ${car.make} ${car.model}.`);
  } else {
    console.log(`${car.make} ${car.model} is already rented.`);
  }
};

Customer.prototype.returnCar = function (car) {
  const index = this.rentedCars.indexOf(car);
  if (index > -1) {
    this.rentedCars.splice(index, 1);
    car.isAvailable = true;
    console.log(`${this.name} returned ${car.make} ${car.model}.`);

    // Simulate a delay in processing the return
    setTimeout(() => {
      console.log(`${car.make} ${car.model} is now available.`);
    }, 2000);
  } else {
    console.log(`${car.make} ${car.model} was not rented by ${this.name}.`);
  }
};

function PremiumCustomer(name, discountRate, rentedCars = []) {
  Customer.call(this, name, rentedCars);
  this.discountRate = discountRate;
}

// Set up inheritance
PremiumCustomer.prototype = Object.create(Customer.prototype);
PremiumCustomer.prototype.constructor = PremiumCustomer;

const BASE_RENTAL_PRICE = 50;

function calculateRentalPrice(
  carType,
  days,
  isPremium = false,
  discountRate = 0
) {
  let typeRate = 0;
  switch (carType) {
    case "SUV":
      typeRate = 20;
      break;
    case "Sedan":
      typeRate = 10;
      break;
    default:
      typeRate = 0;
  }

  let totalPrice = BASE_RENTAL_PRICE + typeRate;
  totalPrice *= days;

  if (isPremium) {
    totalPrice -= totalPrice * (discountRate / 100);
  }

  return totalPrice;
}

function Maintenance(car, delay) {
  setTimeout(() => {
    car.isAvailable = true;
    console.log(
      `${car.make} ${car.model} has completed maintenance and is now available.`
    );
  }, delay);
}

// Create car objects
const car1 = new Car("Toyota", "Corolla", 2020);
const car2 = new Car("Honda", "Civic", 2019);
const car3 = new Car("BMW", "X5", 2021);

// Create customers
const customer1 = new Customer("Alice");
const premiumCustomer1 = new PremiumCustomer("Bob", 10);

// Rent and return cars
customer1.rentCar(car1);
premiumCustomer1.rentCar(car2);

console.log(
  "Rental price for 5 days (SUV) for premium customer:",
  calculateRentalPrice("SUV", 5, true, premiumCustomer1.discountRate)
);

customer1.returnCar(car1);
Maintenance(car3, 3000); // Maintenance delay of 3 seconds

const calculateDiscountedPrice = calculateRentalPrice.bind(
  null,
  "SUV",
  5,
  true,
  premiumCustomer1.discountRate
);
console.log(
  "Discounted price for 5 days (SUV) for premium customer:",
  calculateDiscountedPrice()
);
