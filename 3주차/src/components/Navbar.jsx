import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={styles.navbar}>
      <Link to="/login" style={styles.button}>로그인</Link>
      <Link to="/signup" style={styles.button}>회원가입</Link>
    </div>
  );
};

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
    backgroundColor: '#e50914',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '5px',
  },
};

export default Navbar;