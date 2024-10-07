document.getElementById('todo-input').addEventListener('keydown', function (e) {
  
  if (e.key === 'Enter') {
    addTodo();  
  }
});


function addTodo() {
 
  const todoInput = document.getElementById('todo-input');
  const todoText = todoInput.value.trim(); // trim 공백제거

  
  if (todoText !== '') {
    const todoList = document.getElementById('todo-list');  

    const li = document.createElement('li');  
    li.textContent = todoText;  

    const doneButton = document.createElement('button');  
    doneButton.textContent = '완료';  
   
    doneButton.addEventListener('click', function () {
      moveToDone(li);  
    });

    li.appendChild(doneButton);  
    todoList.appendChild(li); 

    todoInput.value = '';  
  }
}


function moveToDone(task) {
  const doneList = document.getElementById('done-list');  


  task.querySelector('button').remove();  

  const deleteButton = document.createElement('button');  
  deleteButton.textContent = '삭제';  
  
  deleteButton.addEventListener('click', function () {
    task.remove();  
  });

  task.appendChild(deleteButton);  
  doneList.appendChild(task);  
}