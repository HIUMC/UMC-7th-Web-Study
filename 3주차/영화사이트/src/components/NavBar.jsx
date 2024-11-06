import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  const navigate = useNavigate();

  const logoClick = () => {
    navigate("/");
  };

  const loginClick = () => {
    navigate("/login");
  };

  const signupClick = () => {
    navigate("/signup");
  };

  return (
    <Nav>
      <Logo onClick={logoClick}>YONGCHA</Logo>
      <ButtonContainer>
        <Button onClick={loginClick}>로그인</Button>
        <Button onClick={signupClick}>회원가입</Button>
      </ButtonContainer>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h3`
  color: #fc038c;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  color: white;
  font-size: 10px;
  background-color: black;
  border: none;
  border-radius: 5px;
  padding: 5px 8px;
  &:hover {
    background-color: #fc038c;
    cursor: pointer;
  }
`;
