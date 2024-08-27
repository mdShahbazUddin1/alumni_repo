import Device from "./device.js"; // Import Device constructor

// Constructor function for SmartHome
function SmartHome(owner, devices = []) {
  this.owner = owner;
  this.devices = devices;
}

// Prototype methods for SmartHome
SmartHome.prototype.addDevice = function (device) {
  if (device instanceof Device) {
    this.devices.push(device);
    console.log(`${device.name} added to Smart Home.`);
  } else {
    console.log("Invalid device.");
  }
};

SmartHome.prototype.removeDevice = function (deviceName) {
  this.devices = this.devices.filter((device) => device.name !== deviceName);
  console.log(`${deviceName} removed from Smart Home.`);
};

SmartHome.prototype.listDevices = function () {
  return this.devices.map((device) => device.name);
};

// Export SmartHome constructor function
export default SmartHome;
