import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const MovieDetailContainer = styled.div`
  color: white;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
`;

const Overview = styled.p`
  margin: 20px 0;
`;

const CastContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const CastItem = styled.div`
  text-align: center;
  width: 100px;
`;

const CastImage = styled.img`
  width: 100%;
  border-radius: 50%;
`;

const MovieDetailPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    const API_KEY = '917f9b5c9ff5aac30a81070b6952aa22';
    
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=ko-KR`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      }
    };

    const fetchCredits = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=ko-KR`);
        const data = await response.json();
        setCredits(data.cast.slice(0, 12)); // Limit to 12 cast members for display
      } catch (error) {
        console.error("Failed to fetch credits:", error);
      }
    };

    fetchMovieDetails();
    fetchCredits();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <MovieDetailContainer>
      <Title>{movie.title}</Title>
      <p>평균: {movie.vote_average}</p>
      <p>개봉연도: {movie.release_date}</p>
      <Overview>{movie.overview}</Overview>
      
      <h2>감독/출연</h2>
      <CastContainer>
        {credits.map((person) => (
          <CastItem key={person.id}>
            <CastImage src={`https://image.tmdb.org/t/p/w200${person.profile_path}`} alt={person.name} />
            <p>{person.name}</p>
            <p>({person.character})</p>
          </CastItem>
        ))}
      </CastContainer>
    </MovieDetailContainer>
  );
};

export default MovieDetailPage;
