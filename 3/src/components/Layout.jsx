import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #000;
`;

const Navbar = styled.div`
  position: fixed;
  top: 0;
  left: 200px; 
  right: 0;
  height: 80px; 
  background-color: #111;
  display: flex;
  justify-content: flex-end; 
  align-items: center;
  padding: 0 20px;
  color: #fff;
  z-index: 10;
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 10px;

  a {
    color: #fff;
    text-decoration: none;
    padding: 8px 16px;
    background-color: #ff3366;
    border-radius: 4px;
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 100px 20px 20px 220px;
  overflow-y: auto;
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Sidebar />
      <Navbar>
        <AuthButtons>
          <Link to="/login">로그인</Link>
          <Link to="/signup">회원가입</Link>
        </AuthButtons>
      </Navbar>
      <MainContent>{children}</MainContent>
    </LayoutContainer>
  );
};

export default Layout;
