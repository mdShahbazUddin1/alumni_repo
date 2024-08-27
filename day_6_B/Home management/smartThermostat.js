import SmartDevice from "./smartDevice.js"; // Import SmartDevice constructor

// Constructor function for SmartThermostat
function SmartThermostat(
  name,
  brand,
  connectivity,
  temperature = 22,
  mode = "Auto"
) {
  SmartDevice.call(this, name, "Thermostat", true, brand, connectivity);
  this.temperature = temperature;
  this.mode = mode;
}

// Inherit from SmartDevice
SmartThermostat.prototype = Object.create(SmartDevice.prototype);
SmartThermostat.prototype.constructor = SmartThermostat;

// Method to set temperature
SmartThermostat.prototype.setTemperature = function (temp) {
  this.temperature = temp;
  console.log(`${this.name} temperature set to ${temp}°C.`);
};

// Method to change mode
SmartThermostat.prototype.setMode = function (mode) {
  this.mode = mode;
  console.log(`${this.name} mode set to ${mode}.`);
};

// Export SmartThermostat constructor function
export default SmartThermostat;
