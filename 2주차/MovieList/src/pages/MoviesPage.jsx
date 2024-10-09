import React from 'react';
import MovieList from '../components/MovieList';
import { MOVIES } from '../mocks/movies';

const MoviesPage = () => {
  return (
    <div>
      <h1>Movies</h1>
      <MovieList movies={MOVIES.results} />
    </div>
  );
};

export default MoviesPage;
