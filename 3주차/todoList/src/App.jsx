import { useState } from 'react'
import './App.css'


function App() {
  const [todos,setTodos] = useState([
    // { id : '', task : ''}
  ]);
  
  const [text,setText] =useState('');
  
  const [editingId,setEditingId] = useState('');
  const [edtiingText, setEditingText] = useState('');

  const addTodo = () => {
    if(text.trim().length === 0){
      alert('입력값이 존재해야합니다.')
      return;
    }
    setTodos((prev)=>[
      ...prev,
      {id : Math.floor(Math.random() * 100 + 2), task : text},
    ]
    )
    setText('');
  }
  
  const deleteTodo = (id) => {
    setTodos((prev)=> prev.filter((item)=>item.id !== id))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const updateTodo = (id, text) => {
    setTodos((prev)=>(
      prev.map((item) => item.id === id ? {...item, task:text} : item)
    )
    )
    setEditingId('');
  }
return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
        type='text'
        value = {text}
        onChange={(e)=>setText(e.target.value)}/>
        <button onClick={()=>addTodo()} type='submit'>
        할 일 등록
        </button>
      </form>
      <div>
        {todos.map((todo,_) => (
        <div key = {todo.id} style = {{display : 'flex', gap : '20px'}}>
          {/*수정 중일 때*/}
          {editingId === todo.id && (
            <div key={todo.id} style = {{display : 'flex', gap : '5px'}}>
              <p>{todo.id}.</p>
              <input 
              defaultValue={todo.task} 
              onChange={(e)=>setEditingText(e.target.value)}>
              </input>
            </div>)}
          {/*수정 중이 아닐 때*/}
          {editingId !== todo.id && (
            <div key={todo.id} style = {{display : 'flex', gap : '5px'}}>
              <p>{todo.id}.</p>
              <p>{todo.task}</p>
            </div>
          )}
          <button onClick={()=>deleteTodo(todo.id)}>삭제하기</button>
          {editingId === todo.id ? (
            <button onClick={()=> updateTodo(editingId,edtiingText)}>수정 완료</button>
          ) :(
            <button onClick={()=>setEditingId(todo.id)}>수정 진행</button>
          )
          
          }
        </div>
        ))}
      </div>
    </>
    
  );
}

export default App;
