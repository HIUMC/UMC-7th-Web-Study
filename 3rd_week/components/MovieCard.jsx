import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div style={styles.card}>
      <div
        style={{
          ...styles.poster,
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
        }}
      />
      <h3 style={styles.title}>{movie.title}</h3>
      <p style={styles.releaseDate}>{movie.release_date}</p>
    </div>
  );
};

const styles = {
  card: {
    width: '200px',
    margin: '10px',
    color: 'white',
    textAlign: 'center',
  },
  poster: {
    width: '100%',
    height: '300px',
    backgroundSize: 'cover',
    borderRadius: '8px',
  },
  title: {
    fontSize: '16px',
    margin: '10px 0 5px',
  },
  releaseDate: {
    fontSize: '14px',
    color: '#bbb',
  },
};

export default MovieCard;
