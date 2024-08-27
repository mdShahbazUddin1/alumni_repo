import SmartDevice from "./smartDevice.js"; // Import SmartDevice constructor

// Constructor function for SmartLight
function SmartLight(
  name,
  brand,
  connectivity,
  brightness = 100,
  color = "white"
) {
  SmartDevice.call(this, name, "Light", true, brand, connectivity);
  this.brightness = brightness;
  this.color = color;
}

// Inherit from SmartDevice
SmartLight.prototype = Object.create(SmartDevice.prototype);
SmartLight.prototype.constructor = SmartLight;

// Method to adjust brightness
SmartLight.prototype.setBrightness = function (level) {
  this.brightness = level;
  console.log(`${this.name} brightness set to ${level}.`);
};

// Method to adjust color
SmartLight.prototype.setColor = function (color) {
  this.color = color;
  console.log(`${this.name} color set to ${color}.`);
};

// Export SmartLight constructor function
export default SmartLight;
