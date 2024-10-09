import { useState } from 'react';
import './App.css';
import Button from './Button';
import Input from './Input';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, task: '투두 만들어보기' },
    { id: 2, task: '회원 혜원 혜윤 건 찬민' },
  ]);
  const [text, setText] = useState('');
  const [editingId, setEditingId] = useState('');
  const [editText, setEditText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addTodo = () => {
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) + 2, task: text },
    ]);
    setText('');
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };

  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    setEditingId('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <Button onClick={addTodo} text="할 일 등록" />
      
      <div className="todo-list">
        {todos.map((todo) => (
          <div className="todo-item" key={todo.id}>
            {editingId !== todo.id && (
              <div className="todo-text">
                <p>{todo.id}</p>
                <p>{todo.task}</p>
              </div>
            )}
            {editingId === todo.id && (
              <div className="todo-edit">
                <p>{todo.id}</p>
                <Input
                  defaultValue={todo.task}
                  onChange={(e) => setEditText(e.target.value)}
                />
              </div>
            )}
            <Button onClick={() => deleteTodo(todo.id)} text="삭제하기" />
            {editingId === todo.id ? (
              <Button onClick={() => updateTodo(editingId, editText)} text="수정 완료" />
            ) : (
              <Button onClick={() => setEditingId(todo.id)} text="수정 진행" />
            )}
          </div>
        ))}
      </div>
    </form>
  );
}

export default App;
