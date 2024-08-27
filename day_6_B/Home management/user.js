// Constructor function for User
function User(username, password) {
  this.username = username;
  this.password = password;
  this.smartHome = null;
}

// Method to authenticate user (asynchronous)
User.prototype.authenticate = async function () {
  console.log(`Authenticating user ${this.username}...`);
  try {
    const response = await fetch("https://api.example.com/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.username,
        password: this.password,
      }),
    });
    if (response.ok) {
      console.log(`${this.username} authenticated successfully.`);
      return true;
    } else {
      console.log("Authentication failed.");
      return false;
    }
  } catch (error) {
    console.log("Error:", error);
    return false;
  }
};

// Method to manage smart home
User.prototype.setSmartHome = function (smartHome) {
  this.smartHome = smartHome;
};

// Export User constructor function
export default User;
