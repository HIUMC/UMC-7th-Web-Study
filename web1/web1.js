
const input = document.getElementById("inputField");
const todo = document.getElementById("todoList");
const done = document.getElementById("doneList");

function enterkey(){
	if(window.event.keyCode==13){

		if(input.value=="")
		{
			alert("할 일을 입력해주세요.");
		}
		else{
		const newDiv=document.createElement("div");
		newDiv.className="list";
		newDiv.innerText=input.value;
		const moveDiv=document.createElement("button");
		moveDiv.className="but";
		moveDiv.innerText="Done";
		todo.append(newDiv);
		newDiv.append(moveDiv);
		input.value="";

		moveDiv.addEventListener("click", function(){
			done.append(newDiv);
			moveDiv.remove();
			const removeDiv = document.createElement("button");
			removeDiv.className="but";
			removeDiv.innerText="delete";
			newDiv.append(removeDiv);

			removeDiv.addEventListener("click", function(){
				newDiv.remove();
				removeDiv.remove();
			})
		}
		);
	}
	}	
}

//남은 것 : Css, 빈 입력 시 알람

