import React from 'react';

const Signup = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>회원가입 페이지</h1>
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

export default Signup;
