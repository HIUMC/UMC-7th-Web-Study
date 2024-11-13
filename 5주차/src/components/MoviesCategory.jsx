// src/pages/MoviesCategory.jsx
import { Link } from 'react-router-dom';

const MoviesCategory = () => {
  return (
    <div>
      <h2>Movies Categories</h2>
      <ul>
        <li>
          <Link to="/movies/now-playing">Now Playing</Link>
        </li>
        <li>
          <Link to="/movies/popular">Popular</Link>
        </li>
        <li>
          <Link to="/movies/top-rated">Top Rated</Link>
        </li>
        <li>
          <Link to="/movies/upcoming">Upcoming</Link>
        </li>
      </ul>
    </div>
  );
};

export default MoviesCategory;
