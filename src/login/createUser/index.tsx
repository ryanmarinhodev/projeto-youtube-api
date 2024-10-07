import React, { useState } from 'react';
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

function CreateUser() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const navigate = useNavigate();
  const backLogin = () => {
    navigate('/login');
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

        <CreateUserForms>
          <CreateUserInput type="text" placeholder="Nome Sobrenome" />
          <CreateUserInput type="email" placeholder="Seu endereço de e-mail" />

          <div style={{ display: 'flex', gap: '10px' }}>
            <CreateUserInput
              type={showPassword ? 'text' : 'password'}
              placeholder="Senha"
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

          <CreateUserButton>Próxima</CreateUserButton>
        </CreateUserForms>

        <LoginLink onClick={backLogin}>Faça login em vez disso</LoginLink>
      </CreateUserBox>
    </CreateUserContainer>
  );
}

export default CreateUser;
