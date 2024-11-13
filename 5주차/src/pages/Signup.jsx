import { useForm } from "react-hook-form";
import * as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";

const Signup = () => {

    const schema = yup.object().shape({
        email: yup.string().email('올바른 이메일 형식이 아닙니다.').required('이메일을 반드시 입력해주세요.'),
        password: yup.string().min(8, '비밀번호는 8자 이상이어야 합니다.').max(16, '비밀번호는 16자 이하여야 합니다.').required('비밀번호를 입력해주세요.'),
        passwordCheck: yup.string()
            .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.')
            .required('비밀번호 검증 또한 필수 입력요소 입니다.')
    });

    const {register, handleSubmit,formState: {errors},trigger }=useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit=(data)=>{
        console.log("폼 데이터 제출");
        console.log(data);
    }
    
    return(
        <>
        <h1>회원가입 페이지</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type={'email'} 
            {...register("email")} 
            placeholder="이메일을 입력해주세요!" 
            onBlur={() => trigger("email")}
            />
            <p style={{color:'red'}}>{errors.email?.message}</p>

            <input type={'password'} 
            {...register("password")}
            placeholder="비밀번호를 입력해주세요!"
            onBlur={() => trigger("password")}
            />
            <p style={{color:'red'}}>{errors.password?.message}</p>

            <input type={'passwordCheck'} 
            {...register("passwordCheck")} 
            placeholder="비밀번호를 다시 입력해주세요!"
            onBlur={()=>trigger("passwordCheck")}
            />
            <p style={{color:'red'}}>{errors.passwordCheck?.message}</p>
            
            <button>제출</button>
        </form>
        </>
    );
   
};

export default Signup;