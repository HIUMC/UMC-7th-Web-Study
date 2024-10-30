import styled from "styled-components";

const FirstStyledSweetPotato = styled.button`
  background-color: &{props => props.color || 'black'};
  border: none;
  padding: 0;
  cursor: pointer;
  &:hover {
    background-color: green;
  }
`;

const CustomButton = () => {
  return (
    <FirstStyledSweetPotato color="purple">
      커스텀 고구마 버튼
    </FirstStyledSweetPotato>
  );
};

export default CustomButton;
