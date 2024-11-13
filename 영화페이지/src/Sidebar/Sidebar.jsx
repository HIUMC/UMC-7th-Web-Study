import{Link}from 'react-router-dom';
import{IoSearchSharp}from "react-icons/io5";
import { MdMovieCreation } from "react-icons/md";
import './Sidebar.css';
const Sidebar=()=>{
    return(
        <div className='sidebar'>
            <nav className='sidebar-nav'>
                <ul className="sidebar-menu">
                    <li className='sidebar-menu-item'>
                        <Link to="/search" className="sidebar-link">
                        <IoSearchSharp className="sidebar-icon" />찾기</Link>
                    </li>
                    <li className="sidebar-menu-item">
                        <Link to="/movies" className="sidebar-link">
                        <MdMovieCreation className="sidebar-icon" />영화</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
export default Sidebar;