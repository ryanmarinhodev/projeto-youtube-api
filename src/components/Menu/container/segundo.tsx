import { useContext } from "react";
import { 
  ButtonIcon,
  Container,
  Divider,
  MenuItem
} from '../style'
import Historico from '../icons/historia.png'
import MenuContext from "../../../contexts/menuContext";
import Play from '../icons/video (1).png'
import Whatch from '../icons/relogio.png'
import Like from '../icons/gostar.png'
import Mix from '../icons/botao-play.png'
import { useNavigate } from "react-router-dom";


const itens = [
  { id: 5, label: "Histórico", icon: Historico, link: '/' },
  { id: 6, label: "Seus Vídeos", icon: Play, link: '/' },
  { id: 7, label: "Assistir Mais Tarde", icon: Whatch, link: '/' },
  { id: 8, label: "Vídeos marcados como ..", icon: Like, link: '/' },
  { id: 9, label: "Mix - Cd completo", icon: Mix, link: '/' },
];

function Segundo() {

  const { openMenu } = useContext(MenuContext); // Usa o estado do contexto
  const navigate = useNavigate();

  return (
    <Container openMenu={openMenu}>
      {openMenu && (  // Condicional para exibir itens apenas se openMenu for true
        <div>
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

export default Segundo;
