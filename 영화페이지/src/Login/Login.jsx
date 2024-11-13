import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import './Login.css'
import { yupResolver } from '@hookform/resolvers/yup';
function Login() {
  const schema = yup.object().shape({
    email: yup.string().email('올바른 이메일 형식이 아닙니다. 다시 확인해주세요!').required(),
    password: yup.string().min(8,'비밀번호는 8~16자 사이로 입력해주세요!').max(16).required(),
  })
  const {register,handleSubmit, formState:{errors}}=useForm({
    resolver:yupResolver(schema),mode:'onChange',
  });

  const onSubmit=(data)=>{
    console.log('폼 데이터 제출')
    console.log(data);
  }
  return (
    <div className="login-container">
        <h2>로그인</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="login-form">
            <input
                type="email"
                placeholder='이메일을 입력해주세요!'
                {...register("email")}
                className='input-field'
            />
            <p className='error-message'>{errors.email?.message}</p>
            <input
                type='password'
                placeholder='비밀번호를 입력해주세요!'
                {...register("password")}
                className='input-field'
            />
            <p className='error-message'>{errors.password?.message}</p>
            <button type='submit' className='submit-button'>로그인</button>
        </form>

    </div>
  )
}

export default Login;
