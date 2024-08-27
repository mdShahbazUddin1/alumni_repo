document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (!user) {
    alert("Invalid username or password!");
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(user));
  if (user.role === "Patient") {
    window.location.href = "dashboard.html";
  } else if (user.role === "Doctor") {
    window.location.href = "doctor.html";
  }
});
