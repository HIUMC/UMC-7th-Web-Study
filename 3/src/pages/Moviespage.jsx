import { Link } from 'react-router-dom';
import './Moviespage.css';

function MoviesPage() {
  return (
    <div className="movies-page">
      <h2>카테고리</h2>
      <div className="categories">
        <Link to="/movies/Nowplaying" className="category-card">현재 상영중인</Link>
        <div className="category-card">인기있는</div>
        <div className="category-card">높은 평가를 받은</div>
        <div className="category-card">개봉 예정인</div>
      </div>
    </div>
  );
}

export default MoviesPage;
