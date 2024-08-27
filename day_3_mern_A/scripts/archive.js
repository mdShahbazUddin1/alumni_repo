document.addEventListener("DOMContentLoaded", () => {
  const priorityFilter = document.getElementById("priorityFilter");
  const statusFilter = document.getElementById("statusFilter");
  const archiveTable = document
    .getElementById("archiveTable")
    .getElementsByTagName("tbody")[0];

  function displayArchivedTodos() {
    const archived = JSON.parse(localStorage.getItem("archive")) || [];
    const priority = priorityFilter.value;
    const status = statusFilter.value;

    archiveTable.innerHTML = "";

    archived
      .filter(
        (todo) =>
          (priority ? todo.priority === priority : true) &&
          (status ? todo.status === status : true)
      )
      .forEach((todo, index) => {
        const row = archiveTable.insertRow();
        row.innerHTML = `
                    <td>${todo.title}</td>
                    <td class="${todo.priority}">${todo.priority}</td>
                    <td>${todo.status}</td>
                    <td><button onclick="restoreTodo(${index})">Restore</button></td>
                    <td><button onclick="deleteTodo(${index})">Delete</button></td>
                `;
      });
  }

  window.restoreTodo = function (index) {
    const archived = JSON.parse(localStorage.getItem("archive")) || [];
    const todos = JSON.parse(localStorage.getItem("todos")) || [];

    todos.push(archived.splice(index, 1)[0]);
    localStorage.setItem("archive", JSON.stringify(archived));
    localStorage.setItem("todos", JSON.stringify(todos));
    displayArchivedTodos();
  };

  window.deleteTodo = function (index) {
    const archived = JSON.parse(localStorage.getItem("archive")) || [];

    archived.splice(index, 1);
    localStorage.setItem("archive", JSON.stringify(archived));
    displayArchivedTodos();
  };

  priorityFilter.addEventListener("change", displayArchivedTodos);
  statusFilter.addEventListener("change", displayArchivedTodos);

  displayArchivedTodos();
});
