import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import MovieButton from '../../components/MovieButton';

const TopRated = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const movies = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`, {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYmEzNjYzZDYwZDdhZDEzZWZjM2FmN2U0ZmU2YjEwZiIsIm5iZiI6MTczMDQ2NDU3MC41NjAyMDc2LCJzdWIiOiI2NzA2NTI1M2E4ODYxNGQ2YjA4YWUxNjkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.bdgwQIczs-nGHnROemN7JqWXvYXjscf4p7AMlRrHzMg',
                }
            })
            setMovies(movies);
        }
        getMovies()
    }, []);

    return (
        <>
            <h1>평점이 높은</h1>
            <div>
                {movies.data?.results.map((movie) => {
                return(
                    <MovieButton
                    key={movie.id}
                    {...movie}
                    />
                )})}
            </div>
        </>
        
    )
}

export default TopRated;