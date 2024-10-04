import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: #fff;
  margin-top: 50px;
`;

export const LoginBox = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 360px;
`;

export const Logo = styled.img`
  width: 120px;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #202124;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  color: #5f6368;
  font-size: 16px;
  margin-bottom: 24px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #dadce0;
  border-radius: 4px;
  font-size: 16px;
`;

export const Button = styled.button`
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
`;

export const HelpText = styled.p`
  color: #5f6368;
  font-size: 12px;
  margin-top: 24px;
`;

export const Link = styled.a`
  color: #1a73e8;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;
