import React from 'react';
import styled from 'styled-components';


const PosterContainer = styled.div`
    position: relative;
    display: inline-block;
    margin: 5px;
`;

const PosterImage = styled.img`
    width: 100px;
    height: auto;
    transition: 0.3s;
    border-radius: 10px;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 150px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s;
    ${PosterContainer}:hover & {
        opacity: 1;
    }
`;

const MovieInfo = styled.div`
    position: flex;
    color: white;
`;

const MoviePoster = ({movies}) => {
    return (
        <>
            {movies.map(movie => (
                <PosterContainer key={movie.id}>
                    <PosterImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <Overlay />
                    <MovieInfo>
                        <h3>{movie.title}</h3>
                        <p>{movie.release_date}</p>
                    </MovieInfo>
                </PosterContainer>
            ))}
        </>
    );
};

export default MoviePoster;
