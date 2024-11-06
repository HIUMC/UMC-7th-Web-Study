// src/components/Sidebar.jsx
import { Link } from 'react-router-dom';
import { FaSearch, FaFilm } from 'react-icons/fa'; // react-icons에서 필요한 아이콘 가져오기

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <Link to="/search" className="sidebar-link">
          <FaSearch className="sidebar-icon" /> Search
        </Link>
      </div>
      <div className="sidebar-item">
        <Link to="/movies" className="sidebar-link">
          <FaFilm className="sidebar-icon" /> Movies
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
