import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to = "/"><h1>Youngcha</h1></Link>
      <div className="navbarbutton">
        <Link to = "/login">
          <button>LOGIN</button>
        </Link>
        <Link to= "/signup">
          <button className="sign-button">SIGNUP</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
