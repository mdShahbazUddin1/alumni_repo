import Device from "./device.js"; // Import Device constructor

// Constructor function for SmartDevice
function SmartDevice(name, type, status = false, brand, connectivity) {
  Device.call(this, name, type, status); // Call parent constructor
  this.brand = brand;
  this.connectivity = connectivity;
}

// Inherit from Device
SmartDevice.prototype = Object.create(Device.prototype);
SmartDevice.prototype.constructor = SmartDevice;

// Asynchronous method to update firmware
SmartDevice.prototype.updateFirmware = async function () {
  console.log(`Updating firmware for ${this.name}...`);
  try {
    const response = await fetch("https://api.example.com/firmware-update");
    if (response.ok) {
      const data = await response.json();
      console.log(`${this.name} firmware updated to version ${data.version}.`);
    } else {
      console.log("Failed to update firmware.");
    }
  } catch (error) {
    console.log("Error:", error);
  }
};

// Method to check connectivity
SmartDevice.prototype.checkConnectivity = function () {
  console.log(
    `${this.name} connectivity status: ${
      this.connectivity ? "Connected" : "Disconnected"
    }.`
  );
};

// Export SmartDevice constructor function
export default SmartDevice;
