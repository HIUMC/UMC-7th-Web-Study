import React, { useState } from 'react';

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div style={styles.overlay}>
          <h3 style={styles.title}>{movie.title}</h3>
          <p style={styles.vote}>Rating: {movie.vote_average}</p>
          <p style={styles.overview}>{movie.overview}</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  card: {
    width: '200px',
    height: '300px',
    backgroundSize: 'cover',
    margin: '10px',
    position: 'relative',
    borderRadius: '10px',
    overflow: 'hidden',
    cursor: 'pointer',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1,
    transition: 'opacity 0.3s ease',
    padding: '10px',
  },
  title: {
    margin: '0',
    fontSize: '18px',
    textAlign: 'center',
  },
  vote: {
    marginTop: '5px',
    fontSize: '14px',
  },
  overview: {
    marginTop: '10px',
    fontSize: '12px',
    textAlign: 'center',
  },
};

export default MovieCard;