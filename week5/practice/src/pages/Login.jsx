import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const Login = () => {
  const [touchedFields, setTouchedFields] = useState({
    email: false,
    password: false,
  });

  const schema = yup.object().shape({
    email: yup.string().email('올바른 이메일 형식을 입력해주세요').required('이메일은 필수 입력입니다.'),
    password: yup.string().min(8, '비밀번호는 최소 8자 이상이어야 합니다.').max(16, '비밀번호는 최대 16자 이하이어야 합니다.').required('비밀번호는 필수 입력입니다.'),
  });

  const {register, handleSubmit, formState: { errors },} = useForm({
    resolver: yupResolver(schema), mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log('로그인 폼 데이터 제출');
    console.log(data);
  };

  const handleBlur = (field) => {
    setTouchedFields((prev) => ({ ...prev, [field]: true }));
  };

  return (
    <div style={{ textAlign: 'center', color: 'white' }}>
        <h1>로그인</h1>
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'inline-block', width: '100%' }}>
            <div>
                <input
                    type="email"
                    placeholder="이메일을 입력해주세요!"
                    {...register("email")}
                    onBlur={() => handleBlur('email')}
                    style={{ width: '300px', padding: '10px', margin: '8px', borderRadius: '8px' }}
                />
                {touchedFields.email && (
                  <p style={{ color: 'red', fontSize: '12px' }}>{errors.email?.message}</p>
                )}
            </div>
            <div>
                <input
                    type="password"
                    placeholder="비밀번호를 입력해주세요!"
                    {...register("password")}
                    onBlur={() => handleBlur('password')}
                    style={{ width: '300px', padding: '10px', margin: '8px', borderRadius: '8px' }}
                />
                {touchedFields.password && (
                  <p style={{ color: 'red', fontSize: '12px' }}>{errors.password?.message}</p>
                )}
            </div>
            <button
                type="submit"
                style={{width: '322px', padding: '10px', backgroundColor: '#ff0080', color: 'white',
                        border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '1em', marginTop: '8px',
                }}
            >
                로그인
            </button>
        </form>
    </div>
  );
};

export default Login;
