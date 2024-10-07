import styled from 'styled-components';

export const CreateUserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: #fff;
  margin-top: 50px;
`;

export const CreateUserBox = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 400px;
`;

export const CreateUserTitle = styled.h1`
  font-size: 24px;
  color: #202124;
  margin-bottom: 8px;
`;

export const CreateUserSubtitle = styled.p`
  color: #5f6368;
  font-size: 16px;
  margin-bottom: 24px;
`;

export const CreateUserInput = styled.input`
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #dadce0;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
`;

export const PasswordInfo = styled.p`
  color: #5f6368;
  font-size: 12px;
  margin-top: 8px;
  text-align: left;
`;

export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  text-align: left;

  label {
    font-size: 14px;
    color: #202124;
    cursor: pointer;
  }
`;

export const CreateUserButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #1a73e8;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #1665c0;
  }

  &:focus {
    outline: none;
  }
`;

export const CreateUserForms = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

export const LoginLink = styled.a`
  color: #1a73e8;
  text-decoration: none;
  font-size: 14px;
  margin-top: 20px;
  display: block;
  cursor: pointer;
`;
