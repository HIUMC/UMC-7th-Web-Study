import React from 'react';
import {Link} from "react-router-dom";
import styled from 'styled-components';

const Sidebar = () => {
    return (
        <SideList>
            <Sideitem>
                <StyledLink to ="/search">🔍 찾기</StyledLink>
            </Sideitem>
            <Sideitem>
                <StyledLink to ="/categories">🎬 영화</StyledLink>
            </Sideitem>
        </SideList>
    )
}

export default Sidebar;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit; 
`

const SideList = styled.div`
    
    left:0;
    width: 150px;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 0px;
    margin-top : 0;
`

const Sideitem = styled.div`
    padding: 7px 10px;
    font-size: 15px;
    text-align : left;
`