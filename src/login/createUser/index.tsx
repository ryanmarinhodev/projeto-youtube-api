import React, { useContext, useState } from 'react';
import {
  CreateUserContainer,
  CreateUserBox,
  CreateUserTitle,
  CreateUserSubtitle,
  CreateUserInput,
  CreateUserButton,
  CreateUserForms,
  PasswordInfo,
  ShowPasswordContainer,
  LoginLink,
} from './styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../../contexts/contextApi';

function CreateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { handleLogin } = useContext(UserContext);
  const navigate = useNavigate();

  // Função para lidar com o submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:4000/user/sign-up', {
        name,
        email,
        password,
      });
      console.log('Usuário criado:', response.data);
      alert('Usuário criado com sucesso');

      handleLogin(email, password);
      //navigate('/login');
      // Limpa os campos após a criação do usuário
      setName('');
      setEmail('');
      setPassword('');

      // Redireciona o usuário para a página de login após o cadastro
    } catch (err) {
      setError('Erro ao criar usuário. Por favor, tente novamente.');
      alert('Erro ao criar usuário');
    } finally {
      setLoading(false);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <CreateUserContainer>
      <CreateUserBox>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="Google Logo"
          style={{ width: '120px', marginBottom: '20px' }}
        />
        <CreateUserTitle>Criar sua conta nesse projeto</CreateUserTitle>
        <CreateUserSubtitle>Prosseguir no Youtube</CreateUserSubtitle>

        <CreateUserForms onSubmit={handleSubmit}>
          <CreateUserInput
            type="text"
            placeholder="Nome Sobrenome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <CreateUserInput
            type="email"
            placeholder="Seu endereço de e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div style={{ display: 'flex', gap: '10px' }}>
            <CreateUserInput
              type={showPassword ? 'text' : 'password'}
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <CreateUserInput
              type={showPassword ? 'text' : 'password'}
              placeholder="Confirmar"
            />
          </div>

          <PasswordInfo>
            Use 8 caracteres com uma combinação de letras, números e símbolos.
          </PasswordInfo>

          <ShowPasswordContainer>
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={togglePasswordVisibility}
            />
            <label htmlFor="showPassword">Mostrar senha</label>
          </ShowPasswordContainer>

          <CreateUserButton type="submit" disabled={loading}>
            {loading ? 'Criando...' : 'Próxima'}
          </CreateUserButton>

          {error && <p>{error}</p>}
        </CreateUserForms>

        <LoginLink onClick={() => navigate('/login')}>
          Faça login em vez disso
        </LoginLink>
      </CreateUserBox>
    </CreateUserContainer>
  );
}

export default CreateUser;
