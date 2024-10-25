import React, { useContext } from 'react';
import {
  DropDownMenuContainer,
  MenuItem,
  ProfileLetter,
  Icon,
  LetterChannel,
  ProfileContainer,
} from './styles';
import { UserContext } from '../../contexts/contextApi';
import logOutImage from '../../assets/logout.png';
import Videos from '../../components/Menu/icons/video (1).png';

interface DropDownMenuProps {
  isOpen: boolean;
  logOut: () => void;
}

const DropDownMenu: React.FC<DropDownMenuProps> = ({ isOpen, logOut }) => {
  const { login, user } = useContext(UserContext);

  if (!login) return null;

  //teste de commit
  // Pegando a primeira letra do nome para o perfil e colocando no modal
  const firstLetter = user?.nome ? user.nome.charAt(0).toUpperCase() : '';

  return (
    <DropDownMenuContainer className={isOpen ? 'open' : 'closed'}>
      <ul>
        {/* Letra do Nome como Avatar */}
        <ProfileContainer>
          <ProfileLetter>{firstLetter}</ProfileLetter>
          <LetterChannel>{user.nome}</LetterChannel>
        </ProfileContainer>

        <MenuItem>
          <Icon>
            <img src={Videos} alt="Seus Vídeos" />
          </Icon>
          <span>Seus Vídeos</span>
        </MenuItem>
        <MenuItem onClick={logOut}>
          <Icon>
            <img src={logOutImage} alt="Sair" />
          </Icon>
          <span>Sair</span>
        </MenuItem>
      </ul>
    </DropDownMenuContainer>
  );
};

export default DropDownMenu;
