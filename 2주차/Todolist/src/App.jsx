import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const [todos,setTodos]=useState([
    {id: 1, task: '투두 만들어보기'},
    {id: 2, task: '희연 헤원 혜윤 건 찬민'},
  ]);
  
  const [text,setText]=useState('');


  //2. 삭제하기
  //3. 수정하기 (핵심)
  
  //렌더링 방지
  const handleSubmit=(e)=>{
    e.preventDefault();
  };

  //1. 추가하기
  const addTodo=()=>{
    setTodos((prev)=>[
      ...prev,
      {id: Math.floor(Math.random()*100+2),task: text},
    ]);
    setText('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' 
        value={text} 
        onChange={(e)=>setText(e.target.value)}/>
        <button onClick={()=>addTodo()} type='submit'>
          할 일 등록
        </button>
      </form>
      <div>
        {todos.map((todo,_)=>(
          <div style={{display: 'flex', gap: '20px'}}>
            <h4 key={todo.id}>
              {todo.id}.{todo.task}
            </h4>
            <button>삭제하기</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
