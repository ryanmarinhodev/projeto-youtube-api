import styled from 'styled-components';

export const DropDownMenuContainer = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 200px;
  padding: 15px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: opacity 0.3s ease, transform 0.3s ease;
  z-index: 100;

  &.open {
    opacity: 1;
    transform: translateY(0);
  }

  &.closed {
    opacity: 0;
    transform: translateY(-20px);
    pointer-events: none;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export const ProfileLetter = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ff0000;
  color: white;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-bottom: 15px;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }

  span {
    margin-left: 10px;
    font-size: 16px;
    font-weight: 500;
  }
`;

export const Icon = styled.div`
  width: 24px; /* Define o tamanho do ícone */
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%; /* Garante que a imagem ocupe todo o container */
    height: 100%;
    object-fit: contain; /* Mantém a proporção da imagem */
  }
`;
