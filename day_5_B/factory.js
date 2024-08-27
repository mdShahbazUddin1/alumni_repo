function Iphone1(ASIN, color, display, camera) {
  let obj = {};

  obj.Asin = ASIN;
  obj.color = color;
  obj.display = display;
  obj.camera = camera;

  obj.Dial = function () {
    return "tring.. tring...";
  };
  obj.sendMessage = function () {
    return "Sending message...";
  };
  obj.cameraClick = function () {
    return "Camera clicked";
  };

  return obj;
}

let i1 = Iphone1(
  1,
  "B09X67JBQV",
  7.8,
  "IOS",
  "128mb",
  "Gray",
  "90mm",
  "2.0 MP"
);
// ---- properties
console.log(i1.Asin); // 1
console.log(i1.color); // "B09X67JBQV"
console.log(i1.display); // 7.8
console.log(i1.camera); // "IOS"

function iphone2(ASIN, color, display, camera) {
  this.Asin = ASIN;
  this.color = color;
  this.display = display;
  this.camera = camera;

  this.Dial = function () {
    return "tring.. tring...";
  };
  this.sendMessage = function () {
    return "Sending message...";
  };
  this.cameraClick = function () {
    return "Camera clicked";
  };
}

let i3 = {};
iphone2.call(i3, "B09X67JBQV", "Gray", 7.8, "2.0 MP", "Bluetooth 5.1");

class iPhone3 {
  constructor(ASIN, color, display, camera, bluetooth) {
    // Assign properties
    this.ASIN = ASIN;
    this.color = color;
    this.display = display;
    this.camera = camera;
    this.bluetooth = bluetooth;
  }

  // Define methods
  dial() {
    return "tring.. tring...";
  }

  sendMessage() {
    return "Sending message...";
  }

  cameraClick() {
    return "Camera clicked";
  }

  connectBluetooth() {
    return "Bluetooth connected successfully...";
  }
}

// Example usage
let i4 = new iPhone3("B09X67JBQV", "Gray", 7.8, "2.0 MP", "Bluetooth 5.1");

// Accessing properties
console.log(i4.ASIN); // "B09X67JBQV"
console.log(i4.color); // "Gray"
console.log(i4.display); // 7.8
console.log(i4.camera); // "2.0 MP"
console.log(i4.bluetooth); // "Bluetooth 5.1"

// Accessing methods
console.log(i4.dial()); // "tring.. tring..."
console.log(i4.sendMessage()); // "Sending message..."
console.log(i4.cameraClick()); // "Camera clicked"
console.log(i4.connectBluetooth()); // "Bluetooth connected successfully..."
