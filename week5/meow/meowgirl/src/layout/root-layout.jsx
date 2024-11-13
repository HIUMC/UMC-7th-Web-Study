import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Sidebar from '../components/sidebar';


import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  background-color: black;
  width:100vw;
  height:auto;
`;
const Container = styled.div`
  display: flex;
  margin-top:60px;
  margin-right:20px;
  height:100vh;
`;

const Content = styled.main`
  flex: 1;
  padding: 20px;
  margin-left: 150px;
  
  `;


const RootLayout=()=>{
    return (
        <>  
            <Navbar/>
            <LayoutContainer>
                <Container> 
                  <Sidebar/>
                  <Content><Outlet/></Content>
                </Container>
                
            </LayoutContainer>
        </>
    );
};

export default RootLayout;