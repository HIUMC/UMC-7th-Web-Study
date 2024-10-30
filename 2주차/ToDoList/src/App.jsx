import { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import "./App.css";

function App() {
  // 투두리스트, 화면에 출력되는 (추가, 삭제, 수정)
  const [todos, setTodos] = useState([
    { id: 1, task: "투두 만들어보기" },
    { id: 2, task: "희연 혜원 혜윤 건 찬민" },
  ]);

  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState("");
  const [editText, setEditText] = useState("");

  // 렌더링 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 1. 추가하기
  const addTodo = () => {
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100 + 2), task: text },
    ]);
    setText("");
  };
  // 2. 삭제하기
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  };
  // 3. 수정하기
  const updateTodo = (id, text) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === id ? { ...item, task: text } : item))
    );
    setEditingId("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: "5px" }}>
        <Input value={text} onChange={(e) => setText(e.target.value)} />
        <Button onClick={() => addTodo()} type="submit" className="add-button">
          할 일 등록
        </Button>
      </form>
      <div className="todo-list">
        {todos.map((todo, _) => (
          <div key={todo.id} style={{ display: "flex", gap: "5px" }}>
            {/* 수정 안 할 때 */}
            {editingId !== todo.id && (
              <div style={{ display: "flex", gap: "5px" }}>
                <p>{todo.id}.</p>
                <p>{todo.task}</p>
              </div>
            )}
            {/* 수정 중인 상태 */}
            {editingId === todo.id && (
              <div style={{ display: "flex", gap: "5px" }}>
                <p>{todo.id}.</p>
                <Input
                  defaultValue={todo.task}
                  onChange={(e) => setEditText(e.target.value)}
                  className="update-input"
                />
              </div>
            )}
            <Button
              onClick={() => deleteTodo(todo.id)}
              className="delete-input"
            >
              삭제하기
            </Button>
            {editingId === todo.id ? (
              <Button
                onClick={() => updateTodo(editingId, editText)}
                className="edit-complete-button"
              >
                수정 완료
              </Button>
            ) : (
              <Button
                onClick={() => setEditingId(todo.id)}
                className="edit-start-button"
              >
                수정 진행
              </Button>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
