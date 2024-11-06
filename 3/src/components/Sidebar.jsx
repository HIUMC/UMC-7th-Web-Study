import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 200px;
  background-color: #111;
  color: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: fixed;
  height: 100%;
`;

const Logo = styled.h1`
  color: #ff3366;
  cursor: pointer;
  font-size: 24px;
  height: 80px; 
  display: flex;
  align-items: center; 
  margin: 0;
`;

const SidebarItem = styled.div`
  font-size: 18px;
  cursor: pointer;

  a {
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <SidebarContainer>
      <Logo onClick={() => navigate('/')}>YONGCHA</Logo> 
      <SidebarItem>
        <Link to="/search">🔍 찾기</Link>
      </SidebarItem>
      <SidebarItem>
        <Link to="/movies">🎥 영화</Link>
      </SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;
