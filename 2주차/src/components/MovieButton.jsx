import styled from 'styled-components';

function MovieButton (props) {
    const {title, id, poster_path} = props;
    // 객체의 구조분해를 통해 우선 필요한 요소들만 가져옴
    return (
        <MovieContainer>
            <Image src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt="Poster" />
        </MovieContainer>
    )
}

export default MovieButton;

const MovieContainer = styled.div`
    display : inline-block;
    margin : 10px;
    width : 100px;
    height : 150px;
    border-radius: 7px;
    overflow : hidden;

`

const Image = styled.img`
    width: 100%;
    height: 100%;
    &:hover{ /* 마우스 커서를 가져다대면 이미지의 밝기를 줄임 */
        filter: brightness(60%); 
    }
    
`