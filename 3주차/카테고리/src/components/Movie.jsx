import styled from "styled-components";

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
  margin: 0 auto;
`;
const Img = styled.img`
  width: 200px;
  height: auto;
  border-radius: 10px;
`;
const EachMovie = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;
const MovieTitle = styled.span`
  display: block;

  margin-top: 5px;

  font-size: 90%;
  font-weight: bold;
`;
const MovieReleaseDate = styled.span`
  display: block;
  font-size: 50%;
`;

const Movie = ({ movies }) => {
  return (
    <MovieContainer>
      {movies.map((movie) => (
        <EachMovie key={movie.id}>
          <Img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movie-info">
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieReleaseDate>{movie.release_date}</MovieReleaseDate>
          </div>
        </EachMovie>
      ))}
    </MovieContainer>
  );
};

export default Movie;
