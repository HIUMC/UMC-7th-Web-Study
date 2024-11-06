import axios from 'axios';

const API_KEY = '28ac109a28ff7022b1292de6111c7b7b'; // 자신의 API 키
const BASE_URL = 'https://api.themoviedb.org/3/movie';

export const fetchMovies = (category) =>
  axios.get(`${BASE_URL}/${category}?api_key=${API_KEY}&language=ko-KR`);

export const fetchMovieDetail = (movieId) =>
  axios.get(`${BASE_URL}/${movieId}?api_key=${API_KEY}&language=ko-KR`);

export const fetchMovieCredits = (movieId) =>
  axios.get(`${BASE_URL}/${movieId}/credits?api_key=${API_KEY}&language=ko-KR`);