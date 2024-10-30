import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import MoviePoster from '../components/MoviePoster';

const CategoryContainer = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const CategoryBoxes = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const CategoryBox = styled(Link)`
  display: inline-block;
  width: 200px;
  height: 100px;
  margin: 10px;
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  color: black;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`;


const Movies = () => {
  const { category } = useParams();
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (category) => {
    const API_KEY = 'c77007945882250597394ca382111921';
    let apiUrl;

    switch (category) {
      case 'popular':
        apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR`;
        break;
      case 'now-playing':
        apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko-KR`;
        break;
      case 'top-rated':
        apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=ko-KR`;
        break;
      case 'up-coming':
        apiUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=ko-KR`;
        break;
      default:
        return;
    }

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Failed to fetch movies:', error);
      setMovies([]); 
    } 
  };

  useEffect(() => {
    if (category) {
      fetchMovies(category);
    } else {
      setMovies([]);
    }
  }, [category]);

  return (
    <CategoryContainer>
      {category === undefined && (
        <>
          <Title>카테고리</Title>
          <CategoryBoxes>
            <CategoryBox to="/movies/now-playing">현재 상영중인</CategoryBox>
            <CategoryBox to="/movies/popular">인기있는</CategoryBox>
            <CategoryBox to="/movies/top-rated">높은 평가를 받은</CategoryBox>
            <CategoryBox to="/movies/up-coming">개봉 예정중인</CategoryBox>
          </CategoryBoxes>
        </>
      )}
      <MoviePoster movies={movies}/>
    </CategoryContainer>
  );
};

export default Movies;