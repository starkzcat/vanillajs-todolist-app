const todos = document.getElementById("todos");
const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
let data = [];

if (localStorage.getItem("todos")) {
  data = localStorage.getItem("todos");
  data = data.split(",");
  data.map((todo) => {
    renderTodo(todo);
  });
}

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (todoInput.value !== "") {
    data.push(todoInput.value);
    localStorage.setItem("todos", data); // update localstorage

    // render
    renderTodo(todoInput.value);
  }

  todoInput.value = "";
});

function renderTodo(todo) {
  let todoItem = document.createElement("div");
  todoItem.classList.add("todo-item");

  let todoText = document.createElement("span");
  todoText.classList.add("todo-text");
  todoText.innerText = todo;

  let removeTodoIcon = document.createElement("img");
  removeTodoIcon.src = "./assets/img/trash.svg";
  removeTodoIcon.alt = "Trash icon";

  todoItem.appendChild(todoText);
  todoItem.appendChild(removeTodoIcon);

  todos.appendChild(todoItem);

  todoItem.addEventListener("click", (e) => {
    todoItem.classList.toggle("done");
  });

  removeTodoIcon.addEventListener("click", (e) => {
    todos.removeChild(todoItem);
  });
}

function deleteTodo(index) {}
