const todoInput=document.getElementById("todo-input");
const todoList=document.getElementById("todo-list");
const completedList=document.getElementById("completed-list");

todoInput.addEventListener("keyup",function(event){
    if(event.key==="Enter"&&todoInput.value.trim()!==""){
        addTodo(todoInput.value.trim());
        todoInput.value="";
    }
});
function addTodo(task){
    const li=document.createElement("li");
    li.textContent=task;
    const completeButton=document.createElement("button");
    completeButton.textContent="완료";
    completeButton.classList.add("complete");
    completeButton.onclick=function(){
        completeTask(li);
    };
    li.appendChild(completeButton);
    todoList.appendChild(li);
}
function completeTask(li){
    const removeButton=document.createElement("button");
    removeButton.textContent="삭제";
    removeButton.classList.add("remove");
    removeButton.onclick=function(){
        li.remove();
    };
    li.removeChild(li.querySelector(".complete"));
    li.appendChild(removeButton);
    completedList.appendChild(li);
}
