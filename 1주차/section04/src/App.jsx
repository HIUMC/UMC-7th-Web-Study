import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [input, setInput] = useState('');

  
  const addTodo = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      setTodos([...todos, input]);
      setInput(''); 
    }
  };


  const completeTodo = (index) => {
    const newTodos = [...todos];
    const completed = newTodos.splice(index, 1);
    setTodos(newTodos);
    setCompletedTodos([...completedTodos, ...completed]);
  };

  
  const deleteTodo = (index) => {
    const newCompletedTodos = [...completedTodos];
    newCompletedTodos.splice(index, 1);
    setCompletedTodos(newCompletedTodos);
  };

  return (
    <div>
      <h1>UMC Study Plan</h1>
      <div style={{ borderBottom: "2px solid black", marginTop: "50px" }}></div>
      <input
        type="text"
        placeholder="스터디 계획을 작성해보세요!"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={addTodo}
      />
      

      <div className="todo-lists">
        <div className="todo-list">
          <h2>해야 할 일</h2>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                {todo}
                <button onClick={() => completeTodo(index)}>완료</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="completed-list">
          <h2>해낸 일</h2>
          <ul>
            {completedTodos.map((todo, index) => (
              <li key={index}>
                {todo}
                <button onClick={() => deleteTodo(index)}>삭제</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
