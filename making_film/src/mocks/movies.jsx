import React from "react";
import { MOVIES } from "./movies";
import "./movies.css";
import {BrowserRouter} from "react-router-dom"

const Movies = () => {
  return (
    <div className="movies-list">
      {MOVIES.results.map((movie) => (
        <div className="movie-box" key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="movie-image"
          />
          <div className="movie-info">
            <h3 className="movie-title">{movie.title}</h3>
            <p className="movie-overview">{movie.overview}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movies;
