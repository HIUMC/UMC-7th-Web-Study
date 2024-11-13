import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 250px;
  border-radius: 5px;
  border: 1px solid ${({ error }) => (error ? 'red' : '#ddd')};
  outline: none;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #ff0080;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const validateEmail = (value) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailTouched) {
      if (!validateEmail(e.target.value)) {
        setEmailError('올바른 이메일 형식이 아닙니다.');
      } else {
        setEmailError('');
      }
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (passwordTouched) {
      if (e.target.value.length < 8 || e.target.value.length > 16) {
        setPasswordError('비밀번호는 8자리 이상 16자리 이하여야 합니다.');
      } else {
        setPasswordError('');
      }
    }
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
    if (!validateEmail(email)) {
      setEmailError('올바른 이메일 형식이 아닙니다.');
    }
  };

  const handlePasswordBlur = () => {
    setPasswordTouched(true);
    if (password.length < 8 || password.length > 16) {
      setPasswordError('비밀번호는 8자리 이상 16자리 이하여야 합니다.');
    }
  };

  return (
    <Container>
      <h2>로그인</h2>
      <Input
        type="email"
        placeholder="이메일을 입력해주세요!"
        value={email}
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
        error={emailError}
      />
      {emailError && <ErrorMessage>{emailError}</ErrorMessage>}
      
      <Input
        type="password"
        placeholder="비밀번호를 입력해주세요!"
        value={password}
        onChange={handlePasswordChange}
        onBlur={handlePasswordBlur}
        error={passwordError}
      />
      {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
      
      <Button>로그인</Button>
    </Container>
  );
};

export default Login;
