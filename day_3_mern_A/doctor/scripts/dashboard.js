document.addEventListener("DOMContentLoaded", function () {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser || currentUser.role !== "Patient") {
    window.location.href = "login.html";
    return;
  }

  const doctorSelect = document.getElementById("doctor");
  const slotSelect = document.getElementById("slot");
  const appointmentsTable = document
    .getElementById("appointmentsTable")
    .getElementsByTagName("tbody")[0];

  function loadDoctors() {
    // Load doctors (this can be hardcoded or fetched from local storage)
    const doctors = ["Dr. Smith", "Dr. Johnson"];
    doctors.forEach((doctor) => {
      const option = document.createElement("option");
      option.value = doctor;
      option.textContent = doctor;
      doctorSelect.appendChild(option);
    });
  }

  function loadSlots(doctor) {
    // Load slots for the selected doctor (this can be hardcoded or fetched from local storage)
    const slots = ["9:00 AM", "10:00 AM", "11:00 AM"];
    slotSelect.innerHTML = ""; // Clear previous options
    slots.forEach((slot) => {
      const option = document.createElement("option");
      option.value = slot;
      option.textContent = slot;
      slotSelect.appendChild(option);
    });
  }

  function loadAppointments() {
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    const userAppointments = appointments.filter(
      (a) => a.username === currentUser.username
    );
    appointmentsTable.innerHTML = ""; // Clear previous rows
    userAppointments.forEach((appointment, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${appointment.doctor}</td>
                <td>${appointment.slot}</td>
                <td>${appointment.status}</td>
                <td>
                    <button onclick="rescheduleAppointment(${index})">Reschedule</button>
                    <button onclick="cancelAppointment(${index})">Cancel</button>
                </td>
            `;
      appointmentsTable.appendChild(row);
    });
  }

  function bookAppointment(e) {
    e.preventDefault();
    const doctor = doctorSelect.value;
    const slot = slotSelect.value;
    if (!doctor || !slot) {
      alert("Please select both doctor and slot!");
      return;
    }

    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    if (appointments.find((a) => a.doctor === doctor && a.slot === slot)) {
      alert("This slot is already booked!");
      return;
    }

    appointments.push({
      username: currentUser.username,
      doctor,
      slot,
      status: "Pending",
    });
    localStorage.setItem("appointments", JSON.stringify(appointments));
    loadAppointments();
  }

  function rescheduleAppointment(index) {
    // Implement rescheduling logic here
  }

  function cancelAppointment(index) {
    const appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    appointments.splice(index, 1);
    localStorage.setItem("appointments", JSON.stringify(appointments));
    loadAppointments();
  }

  loadDoctors();
  doctorSelect.addEventListener("change", () => loadSlots(doctorSelect.value));
  document
    .getElementById("bookAppointmentForm")
    .addEventListener("submit", bookAppointment);
  loadAppointments();
});
