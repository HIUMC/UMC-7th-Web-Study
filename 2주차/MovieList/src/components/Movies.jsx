import styled from 'styled-components';

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin: 20px;
`;

const Poster = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h3`
  font-size: 1.2em;
  margin-top: 10px;
`;

const Overview = styled.p`
  font-size: 0.9em;
  color: #555;
`;

const Movie = ({ movie }) => (
  <MovieContainer>
    <Poster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
    <Title>{movie.title}</Title>
    <Overview>{movie.overview}</Overview>
  </MovieContainer>
);

export default Movie;
