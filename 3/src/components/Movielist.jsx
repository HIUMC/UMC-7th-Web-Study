import styled from 'styled-components';

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const MovieItem = styled.div`
  width: 150px;
  text-align: center;
`;

const MovieImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const MovieList = ({ movies }) => (
  <MovieContainer>
    {movies.map((movie) => (
      <MovieItem key={movie.id}>
        <MovieImage src={movie.poster_path} alt={movie.title} />
        <h4>{movie.title}</h4>
        <p>{movie.release_date}</p>
      </MovieItem>
    ))}
  </MovieContainer>
);

export default MovieList;
