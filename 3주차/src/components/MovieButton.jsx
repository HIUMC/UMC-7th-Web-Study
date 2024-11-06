import styled from 'styled-components';

function MovieButton (props) {
    const {title, id, poster_path, release_date} = props;
    return (
        <MovieContainer>
            <Image src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt="Poster" />
            <Title>{title}</Title>
            <Date>{release_date}</Date>
        </MovieContainer>
    );
}

export default MovieButton;

const MovieContainer = styled.div`
    display: inline-block;
    margin: 10px;
    width: 100px;
    height: 180px;
    overflow: hidden;
`;

const Image = styled.img`
    width: 100%;
    height: 150px;
    border-radius: 7px;
    &:hover {
        filter: brightness(60%);
    }
    margin-bottom: 0;
`;

const Title = styled.h6`
    text-align: left;
    font-size: 11px;
    margin: 0;
    padding: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const Date = styled.p`
    color: black; /* 수정 */
    font-size: 8px;
    text-align: left;
    margin: 0;
    padding: 0;
    font-weight: bold;
`;
