import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import MovieButton from '../../components/MovieButton';

const Popular = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true); // 로딩 상태를 추가

    useEffect(() => {
        const getMovies = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`,
                    {
                        headers: {
                            accept: 'application/json',
                            Authorization:
                                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYmEzNjYzZDYwZDdhZDEzZWZjM2FmN2U0ZmU2YjEwZiIsIm5iZiI6MTczMDQ2NDU3MC41NjAyMDc2LCJzdWIiOiI2NzA2NTI1M2E4ODYxNGQ2YjA4YWUxNjkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.bdgwQIczs-nGHnROemN7JqWXvYXjscf4p7AMlRrHzMg',
                        },
                    }
                );
                setMovies(response.data.results); // 응답 데이터에서 'results'만 상태로 설정
                setLoading(false); // 데이터 로딩 완료
            } catch (error) {
                console.error('영화 데이터를 가져오는 데 실패했습니다:', error);
                setLoading(false); // 오류가 나더라도 로딩 상태 해제
            }
        };

        getMovies();
    }, []);

    if (loading) {
        return <h1>로딩 중...</h1>; // 데이터 로딩 중일 때 로딩 화면 표시
    }

    return (
        <>
            <h1>인기있는 영화</h1>
            <MovieList>
                {movies.length === 0 ? (
                    <p>현재 인기있는 영화가 없습니다.</p> // 데이터가 없을 때 메시지
                ) : (
                    movies.map((movie) => {
                        return <MovieButton key={movie.id} {...movie} />;
                    })
                )}
            </MovieList>
        </>
    );
};

export default Popular;

const MovieList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin: 20px;
`;
