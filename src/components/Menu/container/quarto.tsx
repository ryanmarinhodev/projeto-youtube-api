import { useContext } from "react";
import { 
  ButtonIcon,
  Container,
  Divider,
  MenuItem
} from '../style'
import MenuContext from "../../../contexts/menuContext";
import youtube from '../icons/premium.png'
import youtubeStudio from '../icons/studio.png'
import youtubeMusic from '../icons/music.png'
import youtubeKids from '../icons/kids.png'
import { useNavigate } from "react-router-dom";


const itens = [
  { id: 10, label: "youtube", icon: youtube, link: '/' },
  { id: 11, label: "youtubeStudio", icon: youtubeStudio, link: '/' },
  { id: 12, label: "youtubeMusic", icon: youtubeMusic, link: '/' },
  { id: 13, label: "youtubeKids", icon: youtubeKids, link: '/' },
];

function Quarto() {

  const { openMenu } = useContext(MenuContext); // Usa o estado do contexto
  const navigate = useNavigate();

  return (
    <Container openMenu={openMenu}>
      {openMenu && (  // Condicional para exibir itens apenas se openMenu for true
        <div>
            <span>Mis do Youtube</span>
          {itens.map((item) => (
            <MenuItem key={item.id} openMenu={openMenu} onClick={() => navigate(item.link)}>
              <ButtonIcon alt="" src={item.icon} />
              <span>{item.label}</span>
            </MenuItem>
          ))}
        </div>
      )}
      <Divider openMenu={openMenu} />
    </Container>
  );
}

export default Quarto;
