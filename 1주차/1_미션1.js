const addBtn = document.querySelector("#addBtn");
let addvalue = document.getElementById("addValue");
let result = document.getElementById("result");

function keyCodeCheck() {
  if (window.event.keyCode === 13 && todoInput.value !== "") {
    createTodo();
  }
}

function createTodo() {
  const todoList = document.querySelector("#todoList");
  const newLi = document.createElement("li");
  const newBtn = document.createElement("button");
  const newSpan = document.createElement("span");
  const todoInput = document.querySelector("#todoInput");

  newLi.appendChild(newBtn);
  newLi.appendChild(newSpan);

  newSpan.textContent = todoInput.value;

  todoList.appendChild(newLi);

  todoInput.value = "";
}
