// src/pages/MovieDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetail, fetchMovieCredits } from '../utils/api';

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    const getMovieData = async () => {
      try {
        const movieResponse = await fetchMovieDetail(movieId);
        setMovie(movieResponse.data);

        const creditsResponse = await fetchMovieCredits(movieId);
        setCredits(creditsResponse.data);
      } catch (error) {
        console.error(error);
      }
    };

    getMovieData();
  }, [movieId]);

  if (!movie || !credits) return <div>Loading...</div>;

  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <h3>Director and Cast</h3>
      <ul>
        {credits.crew
          .filter((member) => member.job === 'Director')
          .map((director) => (
            <li key={director.id}>Director: {director.name}</li>
          ))}
        {credits.cast.slice(0, 5).map((actor) => (
          <li key={actor.id}>Cast: {actor.name} as {actor.character}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetail;