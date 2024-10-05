// 'Enter' 키를 눌렀을 때 addTodo 함수를 호출하여 할 일을 추가하는 이벤트 리스너
document.getElementById('todo-input').addEventListener('keydown', function (e) {
    // 사용자가 입력한 키가 'Enter'일 경우에만 동작
    if (e.key === 'Enter') {
      addTodo();  // 할 일 추가 함수 호출
    }
  });
  
  // 할 일을 추가하는 함수
  function addTodo() {
    // 입력 상자에서 사용자가 입력한 값을 가져옴
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();  // 앞뒤 공백 제거
  
    // 입력된 값이 빈 값이 아닐 경우에만 실행
    if (todoText !== '') {
      const todoList = document.getElementById('todo-list');  // 해야 할 일 목록을 담을 ul 요소 선택
  
      const li = document.createElement('li');  // 새로운 할 일을 담을 li 요소 생성
      li.textContent = todoText;  // li 요소에 사용자가 입력한 텍스트를 추가
  
      const doneButton = document.createElement('button');  // '완료' 버튼 생성
      doneButton.style.backgroundColor = 'green';
      doneButton.textContent = '완료';  // 버튼에 '완료' 텍스트 추가

      doneButton.addEventListener('mouseover', function () {
        doneButton.style.backgroundColor = 'red';
      });
      doneButton.addEventListener('mouseout', function () {
        doneButton.style.backgroundColor = 'green';
      });

      // '완료' 버튼을 클릭했을 때 해야 할 일을 '해낸 일'로 이동시키는 이벤트 리스너 추가
      doneButton.addEventListener('click', function () {
        moveToDone(li);  // li 요소를 '해낸 일' 리스트로 이동
      });
  
      li.appendChild(doneButton);  // li 요소에 '완료' 버튼 추가
      todoList.appendChild(li);  // 해야 할 일 리스트에 새로운 li 요소(할 일) 추가
  
      todoInput.value = '';  // 입력 상자를 비워, 사용자가 새로운 할 일을 입력할 수 있도록 함
    }
  }
  
  // 해야 할 일을 해낸 일로 이동시키는 함수
  function moveToDone(task) {
    const doneList = document.getElementById('done-list');  // 해낸 일 리스트를 담을 ul 요소 선택
  
    // '해낸 일'로 이동할 때 완료 버튼을 제거
    task.querySelector('button').remove();  // li 요소에 있는 '완료' 버튼 삭제
  
    const deleteButton = document.createElement('button');  // '삭제' 버튼 생성
    deleteButton.style.backgroundColor = 'gray';
    deleteButton.textContent = '삭제';  // 버튼에 '삭제' 텍스트 추가

    deleteButton.addEventListener('mouseover', function () {
      deleteButton.style.backgroundColor = 'red';
    });
    deleteButton.addEventListener('mouseout', function () {
      deleteButton.style.backgroundColor = 'gray';
    });

    // '삭제' 버튼을 클릭했을 때 해당 할 일을 리스트에서 제거하는 이벤트 리스너 추가
    deleteButton.addEventListener('click', function () {
      task.remove();  // li 요소(할 일)를 리스트에서 제거
    });
  
    task.appendChild(deleteButton);  // li 요소에 '삭제' 버튼 추가
    doneList.appendChild(task);  // 해낸 일 리스트에 li 요소(해낸 일) 추가
  }