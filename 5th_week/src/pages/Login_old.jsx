
/*
import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
  } = useForm({ mode: 'onChange' });

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
    input: {
      padding: '10px',
      fontSize: '16px',
      marginBottom: '10px',
      borderRadius: '5px',
      border: '1px solid #333',
      backgroundColor: '#222',
      color: '#fff',
      outline: 'none',
      width: '100%',
      maxWidth: '300px',
    },
    errorText: {
      color: 'red',
      fontSize: '14px',
      marginBottom: '10px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      borderRadius: '5px',
      border: 'none',
      color: '#fff',
      backgroundColor: isValid ? '#e50914' : '#555',
      cursor: isValid ? 'pointer' : 'not-allowed',
      width: '100%',
      maxWidth: '300px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>로그인 페이지</h1>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: '100%', maxWidth: '300px' }}>
        <input
          type="email"
          placeholder="이메일"
          {...register('email', {
            required: '이메일은 필수 항목입니다.',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: '올바른 이메일 형식이 아닙니다.',
            },
          })}
          onBlur={() => trigger('email')}
          style={styles.input}
        />
        {errors.email && <div style={styles.errorText}>{errors.email.message}</div>}
        
        <input
          type="password"
          placeholder="비밀번호"
          {...register('password', {
            required: '비밀번호는 필수 항목입니다.',
            minLength: {
              value: 8,
              message: '비밀번호는 8자 이상이어야 합니다.',
            },
            maxLength: {
              value: 16,
              message: '비밀번호는 16자 이하여야 합니다.',
            },
          })}
          onBlur={() => trigger('password')}
          style={styles.input}
        />
        {errors.password && <div style={styles.errorText}>{errors.password.message}</div>}
        
        <button
          type="submit"
          style={styles.button}
          disabled={!isValid}
          onMouseEnter={(e) => (e.target.style.backgroundColor = isValid ? '#0056b3' : '#555')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = isValid ? '#e50914' : '#555')}
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;
*/