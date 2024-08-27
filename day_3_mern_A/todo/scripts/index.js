document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("addTodo");
  const todoTable = document
    .getElementById("todoTable")
    .getElementsByTagName("tbody")[0];

  addButton.addEventListener("click", () => {
    const nameInput = document.getElementById("todoName").value;
    const prioritySelect = document.getElementById("todoPriority").value;

    if (!nameInput) {
      alert("Todo cannot be empty!");
      return;
    }

    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    const newTodo = {
      title: nameInput,
      priority: prioritySelect,
      status: "Pending🔃",
    };

    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
    displayTodos();
  });

  function displayTodos() {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todoTable.innerHTML = "";

    todos.forEach((todo, index) => {
      const row = todoTable.insertRow();
      row.innerHTML = `
                <td>${todo.title}</td>
                <td class="${todo.priority}">${todo.priority}</td>
                <td><button onclick="toggleStatus(${index})">${todo.status}</button></td>
                <td><button onclick="archiveTodo(${index})">Archive</button></td>
            `;
    });
  }

  window.toggleStatus = function (index) {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    todos[index].status =
      todos[index].status === "Pending🔃" ? "Completed✅" : "Pending🔃";
    localStorage.setItem("todos", JSON.stringify(todos));
    displayTodos();
  };

  window.archiveTodo = function (index) {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    const archived = JSON.parse(localStorage.getItem("archive")) || [];

    archived.push(todos.splice(index, 1)[0]);
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("archive", JSON.stringify(archived));
    displayTodos();
  };

  displayTodos();
});
