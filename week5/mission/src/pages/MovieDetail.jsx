import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchMovieDetail from '../hooks/useFetchMovieDetail';

const MovieDetail = () => {
  const { movieId } = useParams();
  const { movieDetail, credits, loading, error } = useFetchMovieDetail(movieId);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>{movieDetail.title}</h1>
      <h3>{movieDetail.overview}</h3>
      <h2>감독: {credits.crew.find(member => member.job === 'Director')?.name}</h2>
      <h2>출연진:</h2>
      <ul>
        {credits.cast.slice(0, 5).map(actor => (
          <li key={actor.cast_id}>{actor.name} as {actor.character}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetail;
