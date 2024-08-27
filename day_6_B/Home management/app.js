import Book from "./book.js"; // Import Book constructor
import Member from "./member.js"; // Import Member constructor
import PremiumMember from "./premiumMember.js"; // Import PremiumMember constructor
import SmartHome from "./smartHome.js"; // Import SmartHome constructor
import SmartLight from "./smartLight.js"; // Import SmartLight constructor
import SmartThermostat from "./smartThermostat.js"; // Import SmartThermostat constructor
import User from "./user.js"; // Import User constructor

// Create book objects (example)
const book1 = new Book("1984", "George Orwell", 1949);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);

// Create smart devices
const light1 = new SmartLight(
  "Living Room Light",
  "Philips",
  true,
  75,
  "Warm White"
);
const thermostat1 = new SmartThermostat(
  "Living Room Thermostat",
  "Nest",
  true,
  22,
  "Cool"
);

// Create a smart home and add devices
const myHome = new SmartHome("Alice");
myHome.addDevice(light1);
myHome.addDevice(thermostat1);

// Create users
const regularUser = new User("alice", "password123");
const premiumUser = new User("bob", "password456");

// Authenticate users
(async () => {
  if (await regularUser.authenticate()) {
    regularUser.setSmartHome(myHome);
  }

  if (await premiumUser.authenticate()) {
    premiumUser.setSmartHome(myHome);
  }
})();

// Demonstrate device management
light1.setBrightness(100);
light1.setColor("Cool White");
thermostat1.setTemperature(20);
thermostat1.setMode("Heat");

// Demonstrate firmware update
await light1.updateFirmware();
await thermostat1.updateFirmware();

// List all devices in smart home
console.log(myHome.listDevices());

// Remove device and list remaining devices
myHome.removeDevice("Living Room Thermostat");
console.log(myHome.listDevices());
