import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const NavbarContainer = styled.nav`
  background-color: #181818;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  color: #ff0080;
`;

const ButtonContainer = styled.div`
  margin-left: 20px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Link to="/">
        <Logo>엄마몰래영화봐요</Logo>
      </Link>
      <ButtonContainer>
        <Link to="/login">
          <button>로그인</button>
        </Link>
        <Link to="/signup">
          <button style={{ marginLeft: '10px', marginRight: '20px' }}>회원가입</button>
        </Link>
      </ButtonContainer>
    </NavbarContainer>
  );
};

export default Navbar;