import React, { useContext, useEffect, useRef } from 'react';
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
  CarouselContainerPai,
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
import { DropDown } from 'contexts/dropDownContext';
import Carousel from '../CarrouselItem/index';

function Header() {
  const { openMenu, setOpenMenu } = useContext(MenuContext);
  const { login, logOut, user } = useContext(UserContext);
  const navigate = useNavigate();

  // Estado para controlar o DropDown
  const { isOpen, setIsOpen, handleToggle } = useContext(DropDown);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [isOpen, setIsOpen]);

  const firstLetter = user?.nome ? user.nome.charAt(0).toUpperCase() : '';

  return (
    <>
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
          <img
            style={{ cursor: 'pointer', width: '100px' }}
            alt=""
            src={Logo}
          />
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

        <ButtonGroup>
          <HeaderButton login={login}>
            <ButtonContainer margin="0 0 0 10px">
              <ButtonIcon alt="" src={VideoIcon} />
            </ButtonContainer>
            <ButtonContainer margin="0 0 0 10px">
              <ButtonIcon alt="" src={NotificationIcon} />
            </ButtonContainer>

            {login && (
              <ButtonContainer
                margin="0 0 0 10px"
                onClick={handleToggle}
                ref={modalRef}
              >
                <span onClick={handleToggle}>{firstLetter}</span>
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
      <CarouselContainerPai openMenu={openMenu}>
        <Carousel />
      </CarouselContainerPai>
    </>
  );
}

export default Header;
