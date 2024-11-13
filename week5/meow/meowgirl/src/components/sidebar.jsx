import React from 'react';
import styled from 'styled-components';
import { FaSearch, FaFilm } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SidebarContainer = styled.aside`
  width: 150px;
  height: 100vh;
  background-color: #181818;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 60px;
`;

const SidebarItem = styled.div`
  color: white;
  display: flex;
  align-items: center;
  padding: 10px 10px;
  cursor: pointer;
  &:hover {
    background-color: black;
  }
  font-size: 15px;
`;

const IconWrapper = styled.div`
  margin-right: 10px;
`;


const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <SidebarContainer>
      <SidebarItem onClick={() => navigate('/search')}>
        <IconWrapper>
          <FaSearch />
        </IconWrapper>
        찾기
      </SidebarItem>
      <SidebarItem onClick={() => navigate('/movies')}>
        <IconWrapper>
          <FaFilm />
        </IconWrapper>
        영화
      </SidebarItem>
    </SidebarContainer>
  );
};

export default Sidebar;