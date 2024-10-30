import { Link } from "react-router-dom";

const BASEURL = "https://api.themoviedb.org/3";

const NavBar = () => {
  return (
    <>
      <nav>
        {/* <ul>
          <li>
            <a href={`${BASEURL}/movie/now-playing`} target="_blank">
              현재 상영 중인 박스
            </a>
          </li>
          <li>
            <a href={`${BASEURL}/movie/popular`} target="_blank">
              인기 있는 박스
            </a>
          </li>
          <li>
            <a href={`${BASEURL}/movie/top-rated`} target="_blank">
              높은 평가를 받은 박스
            </a>
          </li>
          <li>
            <a href={`${BASEURL}/movie/upcoming`} target="_blank">
              개봉 예정 중인 박스
            </a>
          </li>
        </ul> */}
        <ul>
          <li>
            <Link to={`movie/now_playing`}>현재 상영 중인 박스</Link>
          </li>
          <li>
            <Link to={`movie/popular`}>인기 있는 박스</Link>
          </li>
          <li>
            <Link to={`movie/top_rated`}>높은 평가를 받은 박스</Link>
          </li>
          <li>
            <Link to={`movie/upcoming`}>개봉 예정 중인 박스</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
