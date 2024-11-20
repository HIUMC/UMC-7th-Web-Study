import { useEffect, useState } from 'react';
import MovieList from '../components/Movielist';

const Popular = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1')
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Popular Movies</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default Popular;