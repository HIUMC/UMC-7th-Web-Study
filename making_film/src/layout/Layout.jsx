import React from "react";
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import "../components/nsstyle.css";
import { Link } from "react-router-dom";



const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
