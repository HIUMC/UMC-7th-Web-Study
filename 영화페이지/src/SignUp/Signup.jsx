// Signup.js
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import './Signup.css';
import { yupResolver } from '@hookform/resolvers/yup';

function Signup() {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email('올바른 이메일 형식이 아닙니다. 다시 확인해주세요!')
      .required('이메일을 반드시 입력해주세요.'),
    password: yup
      .string()
      .min(8, '비밀번호는 8자 이상이어야 합니다.')
      .max(16, '비밀번호는 16자 이하로 입력해주세요.')
      .required('비밀번호를 입력해주세요.'),
    passwordCheck: yup
      .string()
      .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
      .required('비밀번호 검증 또한 필수 입력요소입니다.'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange', // 실시간 유효성 검사
  });

  const onSubmit = (data) => {
    console.log('폼 데이터 제출');
    console.log(data);
  };

  return (
    <div className="login-container">
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <input
          type="email"
          placeholder="이메일을 입력해주세요!"
          {...register("email")}
          className="input-field"
        />
        <p className="error-message">{errors.email?.message}</p>

        <input
          type="password"
          placeholder="비밀번호를 입력해주세요!"
          {...register("password")}
          className="input-field"
        />
        <p className="error-message">{errors.password?.message}</p>

        <input
          type="password"
          placeholder="비밀번호를 다시 입력해주세요!"
          {...register("passwordCheck")}
          className="input-field"
        />
        <p className="error-message">{errors.passwordCheck?.message}</p>

        <button type="submit" className="submit-button">제출</button>
      </form>
    </div>
  );
}

export default Signup;
