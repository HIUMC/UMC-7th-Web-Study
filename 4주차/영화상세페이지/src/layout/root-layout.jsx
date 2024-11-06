import { Outlet } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const RootLayout = () => {
  return (
    <RootLayoutContainer>
      <NavBar />
      <MainContent>
        <SideBarContainer>
          <SideBar />
        </SideBarContainer>
        <Content>
          <Outlet />
        </Content>
      </MainContent>
    </RootLayoutContainer>
  );
};

export default RootLayout;

const RootLayoutContainer = styled.div`
  padding-left: 10px;
  padding-right: 10px;

  flex-direction: column;
  height: 100vh;
`;

const SideBarContainer = styled.div`
  width: 150px;
`;

const MainContent = styled.div`
  display: flex;
  flex-grow: 1;
`;

const Content = styled.div``;
