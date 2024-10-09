function keyCodeCheck() {
  console.log(window.event);
  if (window.event.keyCode === 13 && todoInput.value !== "") {
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const newBtn = document.createElement("button");

    newLi.appendChild(newBtn);
    newLi.appendChild(newSpan);
    // console.log(newLi);

    newSpan.textContent = todoInput.value;

    todoList.appendChild(newLi);

    todoInput.value = "";
  }
}
