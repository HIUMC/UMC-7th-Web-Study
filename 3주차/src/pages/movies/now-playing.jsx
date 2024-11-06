import React, { useEffect, useState } from 'react';
import MovieButton from '../../components/MovieButton';
import styled from 'styled-components';
import axios from 'axios';

const NowPlaying = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGFjMTA5YTI4ZmY3MDIyYjEyOTJkZTYxMTFjN2I3YiIsIm5iZiI6MTczMDg3Mjg3OS4zNjU2MTA2LCJzdWIiOiI2NzA2NTVhZWRjNTRmMjlkMGVhYjViODUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.kC2YTRH_LRl6l3-ykDIHQZVeBoBVPIEmwdmpzkSAyxw',
                }
            });
            setMovies(response.data.results); // 응답 데이터에서 'results'만 상태로 설정
        };
        getMovies();
    }, []);

    return (
        <div>
            <h1>현재 상영중</h1>
            <MovieList>
                {movies.map((movie) => {
                    return (
                        <MovieButton
                            key={movie.id}
                            {...movie}
                        />
                    );
                })}
            </MovieList>
        </div>
    );
};

export default NowPlaying;

const MovieList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin: 20px;
`;
