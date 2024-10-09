import React from 'react';
import './MovieCard.css'; // CSS 파일 임포트

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`; // 포스터 이미지 URL

  return (
    <div className="movie-card">
      <img src={posterUrl} alt={movie.title} className="movie-poster" />
      <div className="overlay">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
