import React from 'react';
import { MOVIES } from '../data/movies';
import MovieCard from './MovieCard';
import './MovieList.css'; // CSS 파일 임포트

const MovieList = () => {
  return (
    <div className="movie-list">
      {MOVIES.results.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
