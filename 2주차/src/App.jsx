import React from 'react';
import { MOVIES } from './mocks/movies';
import MovieCard from './components/MovieCard';

const App = () => {
  return (
    <div style={styles.container}>
      {MOVIES.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
  },
};

export default App;