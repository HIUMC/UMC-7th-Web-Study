

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [hoveredButton, setHoveredButton] = useState(null);

  // 현재 페이지 경로를 감지
  const isSignupPage = location.pathname === '/signup';
  const isLoginPage = location.pathname === '/login';

  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'flex-end',
      padding: '10px 20px',
      backgroundColor: '#222',
    },
    button: {
      marginLeft: '10px',
      padding: '10px 20px',
      borderRadius: '5px',
      textDecoration: 'none',
      color: '#fff',
    },
    loginButton: {
      backgroundColor: isLoginPage ? '#e50914' : (isSignupPage ? '#222' : (hoveredButton === 'login' ? '#0056b3' : '#e50914')),
      cursor: isLoginPage || isSignupPage ? 'pointer' : 'default', // 기본 커서로 설정
    },
    signupButton: {
      backgroundColor: isSignupPage ? '#e50914' : (isLoginPage ? '#222' : (hoveredButton === 'signup' ? '#0056b3' : '#e50914')),
      cursor: isLoginPage || isSignupPage ? 'pointer' : 'default', // 기본 커서로 설정
    },
  };

  return (
    <div style={styles.navbar}>
      <Link
        to="/login"
        style={{ ...styles.button, ...styles.loginButton }}
        onMouseEnter={() => setHoveredButton('login')}
        onMouseLeave={() => setHoveredButton(null)}
      >
        로그인
      </Link>
      <Link
        to="/signup"
        style={{ ...styles.button, ...styles.signupButton }}
        onMouseEnter={() => setHoveredButton('signup')}
        onMouseLeave={() => setHoveredButton(null)}
      >
        회원가입
      </Link>
    </div>
  );
};

export default Navbar;
