import React from 'react';

const Input = ({ label, type, placeholder, register, error }) => (
  <div style={{ marginBottom: '16px' }}>
    <label style={{ display: 'block', marginBottom: '4px', color: 'white' }}>{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      {...register}
      style={{ width: '300px', padding: '10px', borderRadius: '8px', border: '1px solid #ddd' }}
    />
    {error && <p style={{ color: 'red', fontSize: '12px', margin: '8px' }}>{error.message}</p>}
  </div>
);

export default Input;
