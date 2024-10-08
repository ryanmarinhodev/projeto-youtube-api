import React, { useContext } from 'react';
import { DropDownMenuContainer } from './styles';
import { UserContext } from '../../contexts/contextApi';

interface DropDownMenuProps {
  isOpen: boolean;
  logOut: () => void;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ isOpen, logOut }) => {
  const { login, userName } = useContext(UserContext);

  if (!login) return null;

  console.log('isOpen value: ', isOpen); // Adicione logs para verificar

  return (
    <DropDownMenuContainer isOpen={isOpen}>
      <ul>
        <li>{userName}</li>
        <li>Seus Vídeos</li>
        <li onClick={logOut}>Sair</li>
      </ul>
    </DropDownMenuContainer>
  );
};

export default DropDownMenu;
