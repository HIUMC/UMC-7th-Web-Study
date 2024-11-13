import React from "react";
import { useNavigate } from "react-router-dom";
import './Navbar.css';
const Navbar=()=>{
    const navigate=useNavigate();
    const handleMainPage=()=>{
        navigate("/");
    };
    const handleLogin = () => {
        navigate("/login"); 
    };
    const handleSignUp = () => {
        navigate("/signup"); 
    };

    return(
    <div className="navbar">
        <button className="title-button" onClick={handleMainPage}>YONGCHA</button>
        <div className="navbar-buttons">
        <button onClick={handleLogin}>로그인</button>
        <button className="sign-up" onClick={handleSignUp}>회원가입</button>
        </div>
    </div>)
};
export default Navbar;