import { useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const MovieDetails = () => {
    const params = useParams();
    // console.log(params);

    const location = useLocation();
    const movie = location.state || {} ;
    // console.log(movie);
    const rate = movie.vote_average;
    const roundedRate = rate.toFixed(1);
    const date = movie.release_date;
    const year = date.substring(0, 4); // 연도만 추출하기 위함

    // # credit 받아오는 부분 - 미완
    // const [credits, setCredits] = useState([]); 
    // useEffect(() => {
    //     const getMovies = async () => {
    //         const credits = await axios.get(`https://api.themoviedb.org/3/movie/${params}/credits`, {
    //             headers: {
    //                 accept: 'application/json',
    //                 Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYmEzNjYzZDYwZDdhZDEzZWZjM2FmN2U0ZmU2YjEwZiIsIm5iZiI6MTczMDQ2NDU3MC41NjAyMDc2LCJzdWIiOiI2NzA2NTI1M2E4ODYxNGQ2YjA4YWUxNjkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.bdgwQIczs-nGHnROemN7JqWXvYXjscf4p7AMlRrHzMg',
    //             }
    //         })
    //         setCredits(credits);
    //     }
    //     getMovies()
    // }, []);

    return (
        <DetailDiv>
            <MovieInfo>
                <Image src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt="Poster" />
                <OverlayText>
                    <h1 style = {{margin : 0}}>{movie.title}</h1>
                    <TextStyle>{movie.original_title}</TextStyle>
                    <TextStyle>평균 {roundedRate}</TextStyle>
                    <TextStyle>{year}</TextStyle>
                </OverlayText>
            </MovieInfo>
            <MovieInfo>
                <h1 style = {{margin : 0, textAlign:'left', marginLeft : '30px', marginTop : '10px'}}>감독/출연</h1>
            </MovieInfo>
        </DetailDiv>
    );
}

export default MovieDetails;

const DetailDiv = styled.div`
    display : flex;
    flex-direction : column;
    width : 1280px;
    height : 450px;
    // overflow : hidden;
    position : relative;
`
const Image = styled.img`
    width : 100%;
    height : 450px;
    object-fit: cover;
    object-position : center;
    mask-image: linear-gradient(to right, transparent, black);
    border-radius: 15px;
    margin-bottom : 0;
`

const OverlayText = styled.div`
    position: absolute;
    top: 25px;                
    left: 30px;     
    margin : 0;          
    color: white;     
    text-align : left;
`

const TextStyle = styled.p`
    margin-top : 5px;
    margin-bottom : 2px;
    
`
const MovieInfo = styled.div`

`

const MovieCredit = styled.div`
    

`

const CreditDetail = styled.div`
`