import MoviePoster from "../components/MoviePoster";
import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { useParams, Link } from "react-router-dom";
import now from '../assets/now.jpg';
import pop from '../assets/pop.jpg';
import top from '../assets/top.jpg';
import up from '../assets/up.jpg';
const CategoryContainer = styled.div`
  text-align: center;
  
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color:white;
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
  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-position: center 0.1px;
  border-radius: 8px;
  text-align: center;
  text-decoration: none;
  color: #ff0080;
  
   position: relative; /* 오버레이가 박스 위에 위치하도록 설정 */
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05); /* 약간 확대 효과 */
  }

  &:hover::after {
    opacity: 0.5; /* hover 시 오버레이의 불투명도를 높임 */
  }

  /* 오버레이 효과 */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black; /* 오버레이 색상 */
    opacity: 0; /* 기본 상태에서 보이지 않도록 */
    transition: opacity 0.3s ease; /* hover 시 부드럽게 변화 */
    border-radius: 8px; /* 모서리가 둥글도록 설정 */
  }
`;



const MoviesPage = () => {
    const {category}=useParams();
    const [movies, setMovies] = useState([]);

    const fetchMovies = async (category) => {
        const API_KEY = '917f9b5c9ff5aac30a81070b6952aa22';
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
                <CategoryBox to="/movies/now-playing" $backgroundImage={now}>현재 상영중</CategoryBox>
                <CategoryBox to="/movies/popular" $backgroundImage={pop}>인기</CategoryBox>
                <CategoryBox to="/movies/top-rated"$backgroundImage={top}>높은 평가</CategoryBox>
                <CategoryBox to="/movies/up-coming"$backgroundImage={up}>개봉 예정</CategoryBox>
              </CategoryBoxes>
            </>
          )}
          <MoviePoster movies={movies}/>
        </CategoryContainer>
      );
    };
    

export default MoviesPage;