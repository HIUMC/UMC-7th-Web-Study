import { useState, useEffect } from "react";
import Movie from "./Movie";

const NowPlayingPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/now_playing?api_key=193bf1f7690c6dae8472a749b80f868d"
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
      <ul>
        <Movie movies={movies} />
      </ul>
    </>
  );
};

export default NowPlayingPage;
