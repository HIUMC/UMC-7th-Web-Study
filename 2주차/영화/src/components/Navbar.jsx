import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';

const Navbar = () => {
    return (
            <Header>
                <Logo>
                    <StyledLink to ="/">YONGCHA</StyledLink>
                </Logo>
                <NavLinks>
                    <NavLink>
                        <StyledLink to ="login">로그인</StyledLink>
                    </NavLink>
                    <NavLink    >
                        <StyledLink to ="signup">회원가입</StyledLink>
                    </NavLink>
                </NavLinks>
            </Header>
    )
}

export default Navbar;

const StyledLink = styled.Link`
    text-decoration: none; /* 밑줄 없애기 */
    color: inherit; /* 부모 요소의 색상 사용 */
`;

const Header = styled.div`
    display: flex;
    align-items : center;
    justify-content : space-between;
    background-color : #282828;
    padding : 20px;
    width : 100%;
    box-sizing : border-box;
    height : 60px;
`

const Logo = styled.h2`
    color : #FF5675;
    font-size : 24px;
    font-weight : bold;
`

const NavLinks = styled.div`
    display : flex;
    gap : 15px;
`

const NavLink = styled.div`
    background-color : #282828;
    padding : 10px;
    font-color : 'white';
`