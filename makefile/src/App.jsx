import "./App.css";
import { useState } from "react";
import { MOVIES } from "../mocks/movies";
import "./index.css"

const MovieList = () => {
  const posterimage = "https://image.tmdb.org/t/p/w500";
  return (
    <>
      <ul className = "contianer">
      {MOVIES.results.map(movie => (
          <li key={movie.id} className = "poster-box" >
            <img src={`${posterimage}${movie.poster_path}`} alt={`${movie.title} poster`} />
            <h2>{movie.title}</h2>
          </li>
        ))}
      </ul>
    </>
  );
};

const App = () => {
  return (
    <div>
      <MovieList />
    </div>
  );
};

export default App;
