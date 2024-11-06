import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Movie = ({ movies }) => {
  const navigate = useNavigate();

  const clickMovieImg = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <MovieContainer>
      {movies.map((movie) => (
        <EachMovie key={movie.id}>
          <Img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
            onClick={() => {
              clickMovieImg(movie.id); // 함수 참조 방식
            }}
          />
          <div className="movie-info">
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieReleaseDate>{movie.release_date}</MovieReleaseDate>
            {/* test용 */}
            <p>{movie.id}</p>
          </div>
        </EachMovie>
      ))}
    </MovieContainer>
  );
};

export default Movie;

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
  cursor: pointer;
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
