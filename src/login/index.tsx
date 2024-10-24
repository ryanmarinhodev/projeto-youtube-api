import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/contextApi';
import { useNavigate } from 'react-router-dom';

// Importa os styled components
import {
  Container,
  LoginBox,
  Logo,
  Title,
  Subtitle,
  Input,
  Button,
  HelpText,
  Link,
  ButtonCreateUser,
} from './styles';

function Login() {
  const { handleLogin } = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [passWordVisible, setPasswordVisible] = useState(false);
  const toggleVisiblePassword = () => {
    setPasswordVisible(!passWordVisible);
  };

  const navigateCreateUser = useNavigate();
  const handleCreateUser = () => {
    navigateCreateUser('/user');
  };

  //test de commit
  return (
    <Container>
      <LoginBox>
        <Logo
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          alt="Google Logo"
        />
        <Title>Fazer Login</Title>
        <Subtitle>Prosseguir no YouTube</Subtitle>

        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div style={{ position: 'relative' }}>
          <Input
            type={passWordVisible ? 'text' : 'password'}
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            onClick={toggleVisiblePassword}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              display: password.length > 0 ? 'inline' : 'none',
            }}
          >
            {passWordVisible ? 'Ocultar' : 'Exibir'}
          </span>
        </div>

        <Button onClick={() => handleLogin(email, password)}>Login</Button>

        <ButtonCreateUser onClick={handleCreateUser}>
          Criar conta
        </ButtonCreateUser>

        <HelpText>
          Não é o seu computador? Use o modo visitante para fazer login em
          particular.
        </HelpText>
        <Link href="#">Saiba Mais</Link>
      </LoginBox>
    </Container>
  );
}

export default Login;
