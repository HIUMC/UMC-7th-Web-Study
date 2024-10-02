document.getElementById('Input').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

// 해야 할 일 추가 함수
function addTask() {
    const taskInput = document.getElementById('Input');
    const taskText = taskInput.value.trim();
    
    // 입력이 비어있으면 추가하지 않음
    if (taskText === '') return;

    // 새로운 li 요소를 생성하여 할 일 목록에 추가
    const li = createTaskElement(taskText);
    document.getElementById('todoList').appendChild(li);
    taskInput.value = '';
}

// 새로운 할 일 li 요소 생성
function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    // 완료 버튼 생성 및 이벤트 추가
    const completeButton = document.createElement('button');
    completeButton.textContent = '완료';
    completeButton.classList.add('complete');
    completeButton.addEventListener('click', () => moveToCompleted(li));

    // 삭제 버튼 생성 (처음에는 숨김 처리)
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '삭제';
    deleteButton.classList.add('delete');
    deleteButton.style.display = 'none'; // 처음에는 보이지 않게 처리
    deleteButton.addEventListener('click', () => li.remove());

    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    return li;
}

// 해야 할 일을 해낸 일로 이동
function moveToCompleted(taskElement) {
    // 완료 버튼을 제거하고 해낸 일로 이동
    taskElement.querySelector('.complete').remove();

    // 삭제 버튼을 보이게 함
    const deleteButton = taskElement.querySelector('.delete');
    deleteButton.style.display = 'inline'; // 해낸 일로 이동 시 보이도록 처리

    document.getElementById('completedList').appendChild(taskElement);
}
