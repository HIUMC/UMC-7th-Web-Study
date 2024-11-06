import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import styled from "styled-components";

const SideBar = () => {
  const navigate = useNavigate();

  const searchClick = () => {
    navigate("/search");
  };

  const movieClick = () => {
    navigate("/movie");
  };
  return (
    <SideBarContainer>
      <Search>
        <Img>
          <FaSearch />
        </Img>
        <Menu onClick={searchClick}>찾기</Menu>
      </Search>
      <Movie>
        <Img>
          <BiMoviePlay />
        </Img>
        <Menu onClick={movieClick}>영화</Menu>
      </Movie>
    </SideBarContainer>
  );
};

export default SideBar;

const SideBarContainer = styled.div`
  margin-top: 10px;
`;

const Search = styled.div`
  display: flex;
`;
const Img = styled.span`
  padding: 2px;
  margin-right: 5px;
`;

const Movie = styled.div`
  display: flex;
`;

const Menu = styled.span`
  cursor: pointer;
  padding: 3px;
  font-size: 12px;
  font-weight: 800;
`;
