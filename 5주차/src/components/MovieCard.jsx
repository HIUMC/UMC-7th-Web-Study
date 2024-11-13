// src/components/MovieCard.jsx
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MovieCard = ({ id, title, releaseDate, posterPath }) => (
  <Link to={`/movies/${id}`}>
    <Card>
      <img src={`https://image.tmdb.org/t/p/w300${posterPath}`} alt={title} />
      <h3>{title}</h3>
      <p>{releaseDate}</p>
    </Card>
  </Link>
);

export default MovieCard;

const Card = styled.div`
  width: 200px;
  margin: 1rem;
  text-align: center;
  img {
    width: 100%;
    border-radius: 8px;
  }
  h3 {
    font-size: 1.1rem;
  }
  p {
    font-size: 0.9rem;
    color: gray;
  }
`;
