// Elements
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const doneList = document.getElementById('doneList');

// Add a new task when pressing ENTER
todoInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && todoInput.value.trim() !== '') {
        addTodoItem(todoInput.value);
        todoInput.value = ''; // Clear input
    }
});

// Add todo item
function addTodoItem(task) {
    const li = document.createElement('li');
    li.classList.add('todo-item'); // Add todo-item class
    li.innerHTML = `
        ${task}
        <button onclick="markAsDone(this)">완료</button>
    `;
    todoList.appendChild(li);
}

// Mark as done
function markAsDone(button) {
    const li = button.parentElement;
    li.classList.add('done-item');
    li.querySelector('button').remove(); // Remove the "완료" button
    li.innerHTML += `<button class="delete" onclick="deleteItem(this)">삭제</button>`;
    doneList.appendChild(li);
}

// Delete item
function deleteItem(button) {
    const li = button.parentElement;
    li.remove();
}
