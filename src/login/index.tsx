import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/contextApi";

// Importa os styled components
import { Container, LoginBox, Logo, Title, Subtitle, Input, Button, HelpText, Link } from './styles';

function Login() {

    const { handleLogin } = useContext(UserContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <Container>
      <LoginBox>
        <Logo src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google Logo" />
        <Title>Fazer Login</Title>
        <Subtitle>Prosseguir no YouTube</Subtitle>

        <Input 
          type="email" 
          placeholder="E-mail"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <Input 
          type="password" 
          placeholder="Senha"
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <Button onClick={() => handleLogin(email, password)}>Login</Button>
        <HelpText>Não é o seu computador? Use o modo visitante para fazer login em particular.</HelpText>
        <Link href="#">Saiba Mais</Link>
      </LoginBox>
    </Container>
  );
}

export default Login;
