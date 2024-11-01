import { createContext, useEffect, useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext({} as any);

export const UserStorage = ({ children }: any) => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState<any>({}); // Tipo atualizado para garantir que você possa armazenar o nome corretamente
  const [token, setToken] = useState(localStorage.getItem('token') as string);
  const navigate = useNavigate();
  console.log(user);
  // Mudança da rota após login estar correto
  useEffect(() => {
    if (login) {
      navigate('/');
    }
  }, [login, navigate]);

  const getUser = (token: string) => {
    api
      .get('/user/get-user', {
        headers: {
          Authorization: `Bearer ${token}`, // Token apenas em rotas protegidas
        },
      })
      .then(({ data }) => {
        setUser(data.user); // Salvando o objeto completo do usuário, incluindo o nome
        console.log('Usuario retornado da api', data.user);
        setLogin(true);
      })
      .catch((error) => {
        console.log('Erro ao buscar usuário:', error);
      });
  };

  useEffect(() => {
    if (token) {
      getUser(token);
    }
  }, [token]);

  const logOut = () => {
    localStorage.removeItem('token');
    setLogin(false);
    setUser({});
    navigate('/');
  };

  const handleLogin = (email: string, password: string) => {
    console.log('Token armazenado', localStorage.getItem('token'));
    api
      .post('/user/sign-in', { email, password })
      .then(({ data }) => {
        setLogin(true);
        localStorage.setItem('token', data.token); // Armazena o token
        setToken(data.token); // Atualiza o estado do token
        getUser(data.token); // Chama a função para buscar os dados do usuário
      })
      .catch((error) => {
        alert('Dados incorretos ou inexistentes');
        console.log('Erro no login', error);
      });
  };

  return (
    <UserContext.Provider value={{ login, user, handleLogin, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
