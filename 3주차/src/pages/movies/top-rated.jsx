import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import MovieButton from '../../components/MovieButton';

const TopRated = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true); // 로딩 상태 추가

    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization:
                                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYmEzNjYzZDYwZDdhZDEzZWZjM2FmN2U0ZmU2YjEwZiIsIm5iZiI6MTczMDQ2NDU3MC41NjAyMDc2LCJzdWIiOiI2NzA2NTI1M2E4ODYxNGQ2YjA4YWUxNjkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.bdgwQIczs-nGHnROemN7JqWXvYXjscf4p7AMlRrHzMg',
                        },
                    }
                );
                setMovies(response.data.results); // 응답에서 'results'만 상태로 설정
                setLoading(false); // 로딩 완료
            } catch (error) {
                console.error('영화 데이터를 가져오는 데 실패했습니다:', error);
                setLoading(false); // 오류 발생 시 로딩 종료
            }
        };

        getMovies();
    }, []);

    if (loading) {
        return <h1>로딩 중...</h1>; // 로딩 중일 때 표시할 메시지
    }

    return (
        <>
            <h1>평점이 높은 영화</h1>
            <MovieList>
                {movies.length === 0 ? (
                    <p>현재 평점이 높은 영화가 없습니다.</p> // 데이터가 없을 경우 메시지
                ) : (
                    movies.map((movie) => {
                        return <MovieButton key={movie.id} {...movie} />;
                    })
                )}
            </MovieList>
        </>
    );
};

export default TopRated;

const MovieList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin: 20px;
`;
