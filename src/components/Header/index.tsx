import { Container,
  LogoContainer,
  ButtonContainer,
  ButtonIcon,
  SearchContainer,
  SearchInputContainer,
  SearchInput,
  SearchButton,
  HeaderButton,
} from "./style";
import HamburguerIcon from '../../assets/hamburger.png'
import Logo from '../../assets/YouTube-Logo.png'
import Lupa from '../../assets/search.png'
import Microfone from '../../assets/microfone-gravador.png'
import VideoIcon from '../../assets/video.png'
import NotificationIcon from '../../assets/sino.png'
import { useContext } from "react";
import MenuContext from "../../contexts/menuContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/contextApi";


function Header() {
  const { openMenu, setOpenMenu } = useContext(MenuContext);
  console.log("Estado do openMenu:", openMenu);
  const navigate = useNavigate();
  
  const { login, logOut } = useContext(UserContext)

  return (
    <Container>
      <LogoContainer>
        <ButtonContainer margin="0 10px 0 0">
          <ButtonIcon
            onClick={() => setOpenMenu(!openMenu)}
            alt=""
            src={HamburguerIcon}
          />
        </ButtonContainer>
        <img style={{ cursor: "pointer", width: "100px" }} alt="" src={Logo} />
      </LogoContainer>

      <SearchContainer>
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

      <HeaderButton>
        <ButtonContainer margin="0 0 0 10px">
          <ButtonIcon alt="" src={VideoIcon} />
        </ButtonContainer>
        <ButtonContainer margin="0 0 0 10px">
          <ButtonIcon alt="" src={NotificationIcon} />
        </ButtonContainer>

        {login ? (
          <>
          <ButtonContainer margin="0 0 0 10px">R</ButtonContainer>
          <span onClick={() => logOut()}>Sair</span>
          </>
        ) : (
          <button onClick={() => navigate("/login")}>Fazer Login</button>
        )}
      </HeaderButton>
    </Container>
  );
    
}

export default Header;