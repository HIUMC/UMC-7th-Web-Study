import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #111;
`;

const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  background-color: #000;
  padding: 20px;
  border-radius: 8px;
  color: #fff;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #555;
  border-radius: 4px;
  background-color: #222;
  color: #fff;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
`;

const Button = styled.button`
  padding: 10px;
  background-color: ${({ disabled }) => (disabled ? '#555' : '#ff5b77')};
  border: none;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("이메일을 반드시 입력해주세요.")
    .required("이메일을 반드시 입력해주세요."),
  password: yup
    .string()
    .min(8, "비밀번호는 8~16자 사이로 입력해주세요.")
    .max(16, "비밀번호는 8~16자 사이로 입력해주세요.")
    .required("비밀번호는 8~16자 사이로 입력해주세요."),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2>로그인</h2>
        <Input
          type="email"
          placeholder="이메일을 입력해주세요"
          {...register("email")}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          {...register("password")}
        />
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
        <Button type="submit" disabled={!isValid}>
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default LoginPage;
