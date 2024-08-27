// Constructor function for Device
function Device(name, type, status = false) {
  this.name = name;
  this.type = type;
  this.status = status;
}

// Prototype methods for Device
Device.prototype.turnOn = function () {
  this.status = true;
  console.log(`${this.name} is now ON.`);
};

Device.prototype.turnOff = function () {
  this.status = false;
  console.log(`${this.name} is now OFF.`);
};

Device.prototype.checkStatus = function () {
  return this.status ? `${this.name} is ON.` : `${this.name} is OFF.`;
};

// Export Device constructor function
export default Device;
