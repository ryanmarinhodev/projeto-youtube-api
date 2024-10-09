import React, { useContext } from 'react';
import { DropDownMenuContainer, ProfileLetter, MenuItem, Icon } from './styles';
import { UserContext } from '../../contexts/contextApi';
import logOutImage from '../../assets/logout.png';
import Videos from '../../components/Menu/icons/video (1).png';

interface DropDownMenuProps {
  isOpen: boolean;
  logOut: () => void;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ isOpen, logOut }) => {
  const { login, userName } = useContext(UserContext);

  if (!login) return null;

  // Pegando a primeira letra do nome para o perfil
  const firstLetter = userName ? userName.charAt(0).toUpperCase() : '';

  return (
    <DropDownMenuContainer className={isOpen ? 'open' : 'closed'}>
      <ul>
        {/* Letra do Nome como Avatar */}
        <ProfileLetter>{firstLetter}</ProfileLetter>

        {/* Ícones e Itens de Menu */}
        <MenuItem>
          <Icon>
            <img src={Videos} alt="Seus Vídeos" /> {/* Ícone de Seus Vídeos */}
          </Icon>
          <span>Seus Vídeos</span>
        </MenuItem>
        <MenuItem onClick={logOut}>
          <Icon>
            <img src={logOutImage} alt="Sair" /> {/* Ícone de Sair */}
          </Icon>
          <span>Sair</span>
        </MenuItem>
      </ul>
    </DropDownMenuContainer>
  );
};

export default DropDownMenu;
