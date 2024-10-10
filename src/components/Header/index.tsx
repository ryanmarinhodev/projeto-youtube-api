import React, { useState, useContext } from 'react';
import {
  Container,
  LogoContainer,
  ButtonContainer,
  ButtonIcon,
  SearchContainer,
  SearchInputContainer,
  SearchInput,
  SearchButton,
  HeaderButton,
  LoginButton,
  ButtonGroup,
} from './style';
import HamburguerIcon from '../../assets/hamburger.png';
import Logo from '../../assets/YouTube-Logo.png';
import Lupa from '../../assets/search.png';
import Microfone from '../../assets/microfone-gravador.png';
import VideoIcon from '../../assets/video.png';
import NotificationIcon from '../../assets/sino.png';
import { useNavigate } from 'react-router-dom';
import MenuContext from '../../contexts/menuContext';
import { UserContext } from '../../contexts/contextApi';
import DropDownMenu from '../../login/dropDownMenu/index';
import LoginImg from '../../assets/login-icon.png';

function Header() {
  const { openMenu, setOpenMenu } = useContext(MenuContext);
  const { login, logOut } = useContext(UserContext);
  const navigate = useNavigate();

  // Estado para controlar o DropDown
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    console.log('Toggle funcionando', !isOpen);
  };

  return (
    <Container>
      <LogoContainer>
        <ButtonContainer
          margin="0 10px 0 0"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <ButtonIcon
            onClick={() => setOpenMenu(!openMenu)}
            alt=""
            src={HamburguerIcon}
          />
        </ButtonContainer>
        <img style={{ cursor: 'pointer', width: '100px' }} alt="" src={Logo} />
      </LogoContainer>

      <SearchContainer login={login}>
        <SearchInputContainer>
          <SearchInput placeholder="Pesquisar" />
        </SearchInputContainer>
        <SearchButton>
          <ButtonIcon alt="" src={Lupa} />
        </SearchButton>
        <ButtonContainer margin="0 0 0 10px">
          <ButtonIcon alt="" src={Microfone} />
        </ButtonContainer>
      </SearchContainer>

      {/* Novo contêiner para agrupar os botões */}
      <ButtonGroup>
        <HeaderButton login={login}>
          <ButtonContainer margin="0 0 0 10px">
            <ButtonIcon alt="" src={VideoIcon} />
          </ButtonContainer>
          <ButtonContainer margin="0 0 0 10px">
            <ButtonIcon alt="" src={NotificationIcon} />
          </ButtonContainer>

          {login && (
            <ButtonContainer margin="0 0 0 10px" onClick={handleToggle}>
              <span onClick={handleToggle}>R</span>
              {isOpen && <DropDownMenu isOpen={isOpen} logOut={logOut} />}
            </ButtonContainer>
          )}
        </HeaderButton>

        {/* Botão de Login fora do HeaderButton */}
        {!login && (
          <LoginButton onClick={() => navigate('/login')}>
            <img src={LoginImg} alt="Imagem de login" /> Fazer Login
          </LoginButton>
        )}
      </ButtonGroup>
    </Container>
  );
}

export default Header;
