import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        // 영화 상세 정보
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=193bf1f7690c6dae8472a749b80f868d&language=ko` // 한국어로
        );
        setMovie(response.data);

        // 감독, 출연자 정보 요청
        const creditsResponse = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=193bf1f7690c6dae8472a749b80f868d&language=ko`
        );
        setCredits(creditsResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetails(); // 컴포넌트 마운트 될 때마다 요청
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2>{movie.title}</h2>
      <p>평균 {movie.vote_average}</p>
      <p>{movie.release_date}</p>
      <Overview>{movie.overview}</Overview>

      <h3>감독</h3>
      {credits.crew
        .filter((person) => person.job === "Director") // 감독만
        .map((director) => (
          <p key={director.id}>{director.name}</p>
        ))}

      <h3>출연자</h3>
      {credits.cast.map((actor) => (
        <p key={actor.id}>{actor.name}</p>
      ))}
    </>
  );
};

export default MovieDetailPage;

const Overview = styled.p`
  width: 40%;
`;
