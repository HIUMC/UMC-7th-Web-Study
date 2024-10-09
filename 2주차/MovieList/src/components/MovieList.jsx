import styled from 'styled-components';
import Movie from './Movies';

const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
`;

const MovieList = ({ movies }) => (
  <MovieListContainer>
    {movies.map((movie) => (
      <Movie key={movie.id} movie={movie} />
    ))}
  </MovieListContainer>
);

export default MovieList;
