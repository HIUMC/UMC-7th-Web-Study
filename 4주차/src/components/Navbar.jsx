// navbar.jsx
import {Link} from "react-router-dom";
import './styles/Navbar.css'; 

const Navbar = () => {
    return (
        <nav>
            <Link to={'/'}>Logo</Link>
            <div className="navbar-buttons">
                <Link to="/login" className="navbar-btn">Login</Link>
                <Link to="/signup" className="navbar-btn">Signup</Link>
            </div>
        </nav>
    );
};

export default Navbar;
