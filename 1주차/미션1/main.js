// 할 일 추가
document.getElementById('todo-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const taskText = e.target.value; //입력 필드에 작성된 내용을 taskText에 저장
        if (taskText.trim()) { //공백만 있는 지 확인 (공백일 경우 할일 추가X)
            addTodo(taskText); //해야할 일에 taskText 추가
            e.target.value = ''; //입력필드 값 지움. 다음 할 일 입력할 수 있도록
        }
    }
});

//해야 할 일
function addTodo(taskText) {
    const todoList = document.getElementById('todo-list');
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span> 
        <button onclick="completeTask(this)">완료</button>
    `;
    todoList.appendChild(li);
}

// 할 일 완료
function completeTask(button) {
    const li = button.parentElement;
    const completedList = document.getElementById('completed-list');
    button.remove(); // 완료 버튼 삭제
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '삭제';
    deleteButton.onclick = () => li.remove();
    li.appendChild(deleteButton);
    completedList.appendChild(li);
}
