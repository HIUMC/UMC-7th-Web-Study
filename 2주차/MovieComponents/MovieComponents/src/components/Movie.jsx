import "./Movie.css";

function Movie({ poster_path }) {
  return (
    <span className="movie-item">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={poster_path}
        className="movie-poster"
      />
      <div className="overlay"></div>
    </span>
  );
}

export default Movie;
