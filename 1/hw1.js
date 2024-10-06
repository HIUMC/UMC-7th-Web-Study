document.getElementById("taskInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskValue = taskInput.value;

    const todoList = document.getElementById("todoList");
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${taskValue}
        <button onclick="completeTask(this)">완료</button>
    `;
    
    todoList.appendChild(listItem);
    taskInput.value = ""; // 입력창 초기화
}

function completeTask(button) {
    const listItem = button.parentElement;
    const doneList = document.getElementById("doneList");

    // 완료 버튼을 삭제하고, 삭제 버튼 추가
    listItem.removeChild(button);
    listItem.innerHTML += `<button class="delete" onclick="deleteTask(this)">삭제</button>`;

    doneList.appendChild(listItem);
}

function deleteTask(button) {
    const listItem = button.parentElement;
    listItem.remove();
}
