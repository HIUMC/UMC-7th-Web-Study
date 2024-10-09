import React from "react"; // eslint-disable-line no-unused-vars
import PropTypes from "prop-types"; // PropTypes import 추가
const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

function Movie({ poster_path }) {
  return (
    <>
      <img src={IMG_BASE_URL + poster_path} alt="영화포스터" />;
    </>
  );
}

Movie.propTypes = {
  poster_path: PropTypes.string.isRequired, // poster_path는 필수 prop이며 문자열 타입
};

export default Movie;
