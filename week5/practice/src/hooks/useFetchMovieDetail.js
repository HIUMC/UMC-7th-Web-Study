import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchMovieDetail = (movieId) => {
  const [movieDetail, setMovieDetail] = useState(null);
  const [credits, setCredits] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      const API_KEY = 'c77007945882250597394ca382111921';
      setLoading(true);
      setError(null);

      try {
        const movieResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=ko-KR`);
        setMovieDetail(movieResponse.data);

        const creditsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=ko-KR`);
        setCredits(creditsResponse.data);
      } catch (err) {
        console.error('영화 정보를 가져오는데 실패했습니다:', err);
        setError('영화 정보를 가져오는 데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetail();
  }, [movieId]);

  return { movieDetail, credits, loading, error };
};

export default useFetchMovieDetail;
