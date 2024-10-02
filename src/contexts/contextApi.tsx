import React, { createContext, useEffect, useState } from 'react'
import api from '../api'

export const UserContext = createContext({} as any);

export const UserStorage = ({ children }: any) => {
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState({});
    const [token, setToken] = useState(localStorage.getItem('token') as string);


    const getUser = (token: string) => {
        api.get('/user/get-user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(({ data }) => {
            setUser(data.user);
            setLogin(true);
        })
        .catch((error) => {
            console.log('Usuário não autenticado', error);
        });
    }
    

    useEffect(() => {
        if (token) {
            getUser(token);
        }
    }, [token]);
    



    const logOut = () => {
        localStorage.removeItem('token');
        setLogin(false);
        setUser({})
    }

    const handleLogin = (email: string, password: string) => {
        api.post('/user/sign-in', {email, password}).then(({ data }) => {
            setLogin(true);
            // puxar dados
            localStorage.setItem('token', data.token)
            setToken(data.token);
            getUser(data.token);
        }).catch ((error) => {
            console.log('Não foi possível fazer o login',error)
        })
    }

    return (
        <UserContext.Provider value={{ login, user, handleLogin, logOut }}>
            {children}
        </UserContext.Provider>
    )
}