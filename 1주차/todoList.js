document.addEventListener("DOMContentLoaded", () => { // 스크립트를 head 태그에 삽입해도 작동하게 하기 위함
    const inputField = document.getElementById("myinput");

    inputField.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            const inputValue = inputField.value.trim(); // value에서 공백을 제거한다.
            
            if(inputValue){

                const newDiv = document.createElement("div");
                newDiv.classList.add("todo");
                newDiv.textContent = inputValue;

                const newButton = document.createElement("button");
                newButton.classList.add("button");
                newButton.textContent = "완료";

                newButton.addEventListener("click", () => { 
                    after.appendChild(newDiv); 
                    newButton.textContent = "삭제"; // 완료 버튼을 눌렀을 때, 부모를 해낸 일 div로 변경하고 button의 text를 "삭제" 로 바꾼다.
                    newButton.addEventListener("click", () => { // 해낸 일에서 삭제 버튼을 눌렀을 때, 해낸 일의 child인 현재 노드를 삭제한다.
                        after.removeChild(newDiv);
                    })
                });
                
                newDiv.appendChild(newButton);
                before.appendChild(newDiv);

                inputField.value=""; // 입력창의 값을 비운다.
            }
        }
    }
    )
});


