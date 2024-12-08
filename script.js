// const because their references don't change
const todoInput = document.getElementById("todoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");
const todoCount = document.getElementById("count");

// const because their references will change
let todoText;
let count = 0;

// Function to update the count
function updateTodoCount() {
  count += 1;
  todoCount.textContent = count;
}

// Function to add a new to-do
function addTodo() {
  todoText = todoInput.value.trim();

  if (todoText !== "") {
    const newTodo = document.createElement("li");
    newTodo.textContent = todoText;

    todoList.appendChild(newTodo);

    todoInput.value = "";

    updateTodoCount();
  } else {
    alert("Please enter a to-do");
  }
}

// Add event listener to the button
addTodoBtn.addEventListener("click", addTodo);

todoInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});
