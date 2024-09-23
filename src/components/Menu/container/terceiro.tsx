import { useContext } from "react";
import { 
  ButtonIcon,
  Container,
  Divider,
  MenuItem
} from '../style'
import MenuContext from "../../../contexts/menuContext";
import Alta from '../icons/fogo.png'
import Shopping from '../icons/sacola.png'
import Música from '../icons/musica.png'
import Filmes from '../icons/filme.png'
import Aovivo from '../icons/live.png'
import Jogos from '../icons/joystick.png'
import Notícias from '../icons/news.png'
import Esportes from '../icons/troféu.png'
import Aprender from '../icons/lampada.png'
import { useNavigate } from "react-router-dom";


const itens = [
  { id: 10, label: "Em alta", icon: Alta, link: '/' },
  { id: 11, label: "Shopping", icon: Shopping, link: '/' },
  { id: 12, label: "Música", icon: Música, link: '/' },
  { id: 13, label: "Filmes", icon: Filmes, link: '/' },
  { id: 14, label: "Ao vivo", icon: Aovivo, link: '/' },
  { id: 15, label: "Jogos", icon: Jogos, link: '/' },
  { id: 16, label: "Notícias", icon: Notícias, link: '/' },
  { id: 17, label: "Esportes", icon: Esportes, link: '/' },
  { id: 18, label: "Aprender", icon: Aprender, link: '/' },
];

function Terceiro() {

  const { openMenu } = useContext(MenuContext); // Usa o estado do contexto
  const navigate = useNavigate();

  return (
    <Container openMenu={openMenu}>
      {openMenu && (  // Condicional para exibir itens apenas se openMenu for true
        <div>
            <span>Explorar</span>
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

export default Terceiro;
