import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Input from '../components/Input';

const Signup = () => {
  const [touchedFields, setTouchedFields] = useState({
    email: false,
    password: false,
    passwordCheck: false,
  });

  const schema = yup.object().shape({
    email: yup.string().email('올바른 이메일 형식을 입력해주세요').required('이메일은 필수 입력입니다.'),
    password: yup.string().min(8, '비밀번호는 최소 8자 이상이어야 합니다.').max(16, '비밀번호는 최대 16자 이하이어야 합니다.').required('비밀번호는 필수 입력입니다.'),
    passwordCheck: yup.string().oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.').required('비밀번호 확인은 필수 입력입니다.'),
  });

  const {register, handleSubmit, formState: { errors },} = useForm({
    resolver: yupResolver(schema), mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log('회원가입 폼 데이터 제출');
    console.log(data);
  };

  const handleBlur = (field) => {
    setTouchedFields((prev) => ({ ...prev, [field]: true }));
  };

  return (
    <div style={{ textAlign: 'center', color: 'white' }}>
      <h1>회원가입</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{ display: 'inline-block', width: '100%' }}
      >
        <Input
          type="email"
          placeholder="이메일을 입력해주세요!"
          register={{ ...register("email"), onBlur: () => handleBlur("email") }}
          error={touchedFields.email ? errors.email : null}
        />

        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요!"
          register={{ ...register("password"), onBlur: () => handleBlur("password") }}
          error={touchedFields.password ? errors.password : null}
        />

        <Input
          type="password"
          placeholder="비밀번호를 다시 입력해주세요!"
          register={{ ...register("passwordCheck"), onBlur: () => handleBlur("passwordCheck") }}
          error={touchedFields.passwordCheck ? errors.passwordCheck : null}
        />

        <button
          type="submit"
          style={{
            width: '322px',
            padding: '10px',
            backgroundColor: '#ff0080',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '1em',
            marginTop: '8px',
          }}
        >
          제출
        </button>
      </form>
    </div>
  );
};

export default Signup;
