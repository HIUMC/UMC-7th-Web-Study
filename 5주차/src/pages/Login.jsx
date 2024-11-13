import { validateLogin } from "../utils/validate";
import useForm from "../hooks/use-form";


const Login = () => {

    const login=useForm({
        initialValue:{
            email:'',
            password:'',
        },
        validate: validateLogin
    })
    
    const handlePressLogin=()=>{
        console.log(login.values.email, login.values.password)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <h1>로그인</h1>
        <input
            type="email"
            placeholder="이메일을 입력해주세요!"
            {...login.getTextInputProps('email')}
        />
        {login.touched.email&&login.errors.email&&<p>{login.errors.email}</p>}
        
        <input
            type="password"
            placeholder="비밀번호를 입력해주세요!"
            {...login.getTextInputProps('password')}
        />
        {login.touched.password&&login.errors.password&&<p>{login.errors.password}</p>}
        
        <button onClick={handlePressLogin}>로그인</button>
    </div>
    );
    
  
};

export default Login;

