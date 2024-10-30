import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: newTodo }]);
    setNewTodo('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const startEditTodo = (index) => {
    setEditIndex(index);
    setEditText(todos[index].text);
  };

  const completeEditTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = editText;
    setTodos(updatedTodos);
    setEditIndex(null);
    setEditText('');
  };

  return (
    <div>
      <Input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="할 일을 입력하세요"
        className="todo-input"
      />
      <Button onClick={addTodo} className="add-todo-button">할 일 등록</Button>

      <ul>
        {todos.map((todo, index) => (
          <li key={todo.id}>
            {editIndex === index ? (
              <>
                <Input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="edit-input"  // CSS 클래스 추가
                />
                <Button onClick={() => deleteTodo(todo.id)} className="delete-button">삭제하기</Button>
                <Button onClick={() => completeEditTodo(index)} className="edit-button">수정 완료</Button>
              </>
            ) : (
              <>
                {todo.text}
                <Button onClick={() => deleteTodo(todo.id)} className="delete-button">삭제하기</Button>
                <Button onClick={() => startEditTodo(index)} className="edit-button">수정 진행</Button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;