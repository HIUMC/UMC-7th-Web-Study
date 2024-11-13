import { useContext } from 'react';
import { createContext, useState } from 'react';

export const LoginContext = createContext(null)

export const LoginProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [online,setOnline] = useState('offline')

    const login = (userData) => {
        setUser(userData);
        setOnline('online');
        console.log("context 확인용")
        console.log(online)
    }

    const logout = () => {
        setUser(null);
        setOnline('offline');
    }
    return (
        <LoginContext.Provider value = {{user, online, login,logout}}>
            {children}
        </LoginContext.Provider>
    )
}

