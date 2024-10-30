// src/pages/CategoryPage.jsx
import { useEffect, useState } from 'react';
import { fetchMovies } from '../utils/api';
import MovieCard from '../components/MovieCard';
import styled from 'styled-components';

const CategoryPage = ({ category }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
        try {
            const { data } = await fetchMovies(category);
            setMovies(data.results);
          } catch (error) {
            console.error('Error fetching movies:', error);
          }
    };
    loadMovies();
  }, [category]);

  return (
    <Grid>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          releaseDate={movie.release_date}
          posterPath={movie.poster_path}
        />
      ))}
    </Grid>
  );
};

export default CategoryPage;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem;
`;
