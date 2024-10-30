const Movie = ({ movies }) => {
  return (
    <div className="movie-container">
      {movies.map((movie) => (
        <div key={movie.id} className="movie">
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movie-info">
            <span className="movie-title">{movie.title}</span>
            <span className="movie-release-date">{movie.release_date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movie;
