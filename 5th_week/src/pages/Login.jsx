
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// 유효성 검사 스키마 정의
const schema = yup.object().shape({
  email: yup
    .string()
    .required('이메일은 필수 입력 요소입니다.')
    .email('올바른 이메일 형식이 아닙니다.'),
  password: yup
    .string()
    .required('비밀번호는 필수 입력 요소입니다.')
    .min(8, '비밀번호는 8자 이상이어야 합니다.')
    .max(16, '비밀번호는 16자 이하여야 합니다.'),
});

// Input 컴포넌트
const Input = ({ label, register, error, type = 'text' }) => (
  <div style={{ marginBottom: '20px', width: '100%', maxWidth: '300px' }}>
    <label style={{ display: 'block', color: '#fff', marginBottom: '5px' }}>{label}</label>
    <input
      {...register}
      type={type}
      style={{
        padding: '10px',
        width: '100%',
        borderRadius: '5px',
        border: '1px solid #333',
        backgroundColor: '#222',
        color: '#fff',
      }}
    />
    {error && <p style={{ color: 'red', fontSize: '12px' }}>{error.message}</p>}
  </div>
);

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const [isHovered, setIsHovered] = useState(false); // 마우스 호버 상태 추가

  // 로그인 핸들러
  const onSubmit = (data) => {
    console.log('로그인 데이터:', data);
  };

  // 스타일 정의
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#111',
      color: '#fff',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      maxWidth: '300px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      borderRadius: '5px',
      border: 'none',
      color: '#fff',
      backgroundColor: isValid ? (isHovered ? '#0056b3' : '#e50914') : '#555',
      cursor: isValid ? 'pointer' : 'not-allowed',
      width: '100%',
      maxWidth: '300px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>로그인 페이지</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
        <Input
          label="이메일"
          register={register('email')}
          error={errors.email}
          type="email"
        />
        <Input
          label="비밀번호"
          register={register('password')}
          error={errors.password}
          type="password"
        />
        <button
          type="submit"
          style={styles.button}
          disabled={!isValid}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;
