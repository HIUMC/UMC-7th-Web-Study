import { useState, useEffect } from "react";
import Movie from "./Movie";

const UpComingPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/upcoming?api_key=193bf1f7690c6dae8472a749b80f868d"
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      <h1>Upcoming Movies</h1>
      <ul>
        <Movie movies={movies} />
      </ul>
    </>
  );
};

export default UpComingPage;
