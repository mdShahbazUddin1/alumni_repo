document.addEventListener("DOMContentLoaded", function () {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser || currentUser.role !== "Doctor") {
    window.location.href = "login.html";
    return;
  }

  const appointmentsTable = document
    .getElementById("doctorAppointmentsTable")
    .getElementsByTagName("tbody")[0];

  function loadAppointments() {
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const doctorAppointments = appointments.filter(
      (a) => a.doctor === currentUser.username
    );
    appointmentsTable.innerHTML = ""; // Clear previous rows
    doctorAppointments.forEach((appointment) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${appointment.username}</td>
                <td>${appointment.slot}</td>
                <td>${appointment.status}</td>
            `;
      appointmentsTable.appendChild(row);
    });
  }

  loadAppointments();
});

document.addEventListener("DOMContentLoaded", function () {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser || currentUser.role !== "Doctor") {
    window.location.href = "login.html";
    return;
  }

  const appointmentsTable = document
    .getElementById("doctorAppointmentsTable")
    .getElementsByTagName("tbody")[0];

  function loadAppointments() {
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const doctorAppointments = appointments.filter(
      (a) => a.doctor === currentUser.username
    );
    appointmentsTable.innerHTML = ""; // Clear previous rows
    doctorAppointments.forEach((appointment) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${appointment.username}</td>
                <td>${appointment.slot}</td>
                <td>${appointment.status}</td>
            `;
      appointmentsTable.appendChild(row);
    });
  }

  loadAppointments();
});
