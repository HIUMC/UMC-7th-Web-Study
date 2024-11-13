import { Outlet } from 'react-router-dom';
import Navbar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import styled from 'styled-components';

const RootLayout = () => {
    return (
        <>
            <Navbar/>
            <RootDiv>
                <Sidebar/>
                <Outlet/>
            </RootDiv>
        </>
    )
}

export default RootLayout;

const RootDiv = styled.div`
    justify-content: start;
`

const Content = styled.div`
    right : 150px;
`