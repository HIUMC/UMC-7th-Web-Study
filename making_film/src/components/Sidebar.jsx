import React from 'react';
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <Link to = "/find">
        <li >FIND</li>
        </Link>
        <Link to = "/categories">
        <li>FILM</li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;