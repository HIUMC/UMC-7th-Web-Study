// src/utils/api.js
import axios from 'axios';

const API_KEY = 'f790fa2f2622efbe1d1b639bbe001695'; // 자신의 API 키
const BASE_URL = 'https://api.themoviedb.org/3/movie';

export const fetchMovies = (category) =>
  axios.get(`${BASE_URL}/${category}?api_key=${API_KEY}&language=ko-KR`);
