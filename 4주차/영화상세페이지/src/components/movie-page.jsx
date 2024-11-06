import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const MoviePage = () => {
  const navigate = useNavigate();

  const clickNowPlaying = () => {
    navigate("/movie/now_playing");
  };

  const clickPopular = () => {
    navigate("/movie/popular");
  };

  const clickTopRated = () => {
    navigate("/movie/top_rated");
  };

  const clickUpcoming = () => {
    navigate("/movie/upcoming");
  };

  return (
    <>
      <h3>카테고리</h3>
      <CategoryBox onClick={clickNowPlaying}>
        <CategoryName>현재 상영 중인</CategoryName>
      </CategoryBox>
      <CategoryBox onClick={clickPopular}>
        <CategoryName>인기 있는</CategoryName>
      </CategoryBox>
      <CategoryBox onClick={clickTopRated}>
        <CategoryName>높은 평가를 받은</CategoryName>
      </CategoryBox>
      <CategoryBox onClick={clickUpcoming}>
        <CategoryName>개봉 예정인</CategoryName>
      </CategoryBox>
    </>
  );
};

export default MoviePage;

const CategoryBox = styled.span`
  display: flex;
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
`;
const CategoryName = styled.span``;
