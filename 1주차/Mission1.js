document.addEventListener("DOMContentLoaded", function () {
    const inputBox = document.getElementsByClassName("inputBox")[0];
    const todoList = document.getElementsByClassName("todoList")[0];
    const doneList = document.getElementsByClassName("doneList")[0];
  
    const form = document.querySelector(".inputPlan");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
    });
  
    function addPlan(plan) {
      const planItem = document.createElement("div");
      planItem.classList.add("todoItem"); // 'todoItem' CSS 클래스 추가
  
      const span = document.createElement("span");
      span.innerText = plan;
  
      const completeButton = document.createElement("button");
      completeButton.innerText = "완료";
      completeButton.addEventListener("click", function () {
        completePlan(planItem);
      });
  
      planItem.appendChild(span);
      planItem.appendChild(completeButton);
  
      todoList.appendChild(planItem);
    }
  
    function completePlan(planItem) {
      const planText = planItem.querySelector("span").innerText;
      planItem.remove();
  
      const doneItem = document.createElement("div");
      doneItem.classList.add("doneItem");
  
      const span = document.createElement("span");
      span.innerText = planText;
  
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "삭제";
      deleteButton.addEventListener("click", function () {
        deletePlan(doneItem);
      });
  
      doneItem.appendChild(span);
      doneItem.appendChild(deleteButton);
  
      doneList.appendChild(doneItem);
    }
  
    function deletePlan(doneItem) {
      doneItem.remove();
    }
  
    inputBox.addEventListener("keypress", function (e) {
      if (e.key === "Enter" && inputBox.value.trim() !== "") {
        addPlan(inputBox.value.trim());
        inputBox.value = "";
      }
    });
  });
  