import { MOVIES } from '../mocks/movies';
import './Homepage.css';

function HomePage() {
  return (
    <div className="home-page">
      <div className="movies-container">
        {MOVIES.results.map((movie) => (
          <div key={movie.id} className="movie-card">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <h3 className="movie-title">{movie.title}</h3>
            <p className="movie-release-date">{movie.release_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
