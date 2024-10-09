import './App.css'
import React from 'react';
import MovieList from './components/MovieList';
import './App.css'; // 필요 시 추가 스타일

function App() {
  return (
    <div className="App">
      <h1>영화 목록</h1>
      <MovieList />
    </div>
  );
}

export default App;
