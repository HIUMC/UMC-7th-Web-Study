import React from 'react';

const Login = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>로그인 페이지</h1>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#111',
    color: '#fff',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
};

export default Login;