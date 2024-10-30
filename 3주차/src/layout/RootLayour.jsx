import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  margin-top: 60px;
`;

const Content = styled.main`
  flex: 1;
  padding: 20px;
  margin-left: 150px;
`;

const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <LayoutContainer>
        <Sidebar />
        <Content>{children}</Content>
      </LayoutContainer>
    </>
  );
};

export default RootLayout;