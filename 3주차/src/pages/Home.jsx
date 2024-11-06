import { MOVIES } from '../components/Movies';
import MovieButton from '../components/MovieButton';
import styled from 'styled-components';

const HomePage = () => {
    return (
        <MovieList>
            {MOVIES.results.map((movie) => (
                <MovieButton
                    key={movie.id}
                    {...movie}
                />
            ))}
        </MovieList>
    );
}

export default HomePage;

const MovieList = styled.div`
    display: flex;
    flex-wrap: wrap; /* 여러 줄로 표시되도록 설정 */
    justify-content: center; /* 가로로 가운데 정렬 */
    margin: 20px;
    gap: 10px; /* 버튼 사이에 간격 추가 */
`;
