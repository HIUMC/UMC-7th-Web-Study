import { useEffect, useState } from 'react';
import MovieList from '../components/Movielist';

const NowPlaying = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1')
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Now Playing</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default NowPlaying;
