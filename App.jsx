import { useState } from 'react';
import './App.css';

function App() {
    //투두리스트, 화면에 출력되는 (추가, 삭제, 수정)
    const [todos, setTodos] = useState([
        {id:1, task:'making to do list'},
        {id:2, task: '희연 혜원 해윤 건 찬민'}
    ]);
    console.log(todos);


    //랜더링 방지
    const handleSubmit = (e)=> {
        e.preventDefault();
    }

    const [text, setText] = useState("");
    




    //1.추가하기
    const addTodo = () => {
        setTodos((prev) => [
            ...prev,
            {id: Math.floor(Math.random() * 100 + 2), task: text},
        ]);
        setText('');
    };
    
    //2.삭제하기
    const deleteTodo=(id) => {
        setTodos((prev) => prev.filter((item) => item.id !== id));  
    };
    
    //3.수정하기 
    const updateTodo = (id, text) => {};
    


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
                <button onClick={addTodo} type='submit'>할 일 등록</button> {/* onClick 부분도 단순화 */}
            </form>
            <div >
                {todos.map((todo) => (
                    <div style ={{display : 'flex', gap : '10px'}}>
                        <div key={todo.id}>
                            {todo.id}. {todo.task}
                        </div>
                        <input defaultValue={todo.task}/>
                        <button onClick={() => deleteTodo(todo.id)}>삭제하기</button>
                        <button>수정진행</button>
                    </div>
                ))}
            </div>
        </>
    );

}

export default App;