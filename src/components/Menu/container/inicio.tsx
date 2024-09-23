import { useContext } from "react";
import { 
  ButtonIcon,
  Container,
  Divider,
  MenuItem
} from '../style'
import Inicio from '../icons/inicio.png'
import MenuContext from "../../../contexts/menuContext";
import Shorts from '../icons/shorts.png'
import Inscricoes from '../icons/inscricoes.png'
import Biblioteca from '../icons/biblioteca.png'
import { useNavigate } from "react-router-dom";



const itens = [
  { id: 1, label: "Início", icon: Inicio, link: '/' }, // Alterado para '/'
  { id: 2, label: "Shorts", icon: Shorts, link: '/shorts' },
  { id: 3, label: "Inscrições", icon: Inscricoes, link: '/inscricoes' },
  { id: 4, label: "Biblioteca", icon: Biblioteca, link: '/biblioteca' }, // Alterado para '/biblioteca'
];

function MenuOne() {

  const { openMenu } = useContext(MenuContext);
  const navigate = useNavigate();

  return (
    <Container openMenu={openMenu}>
      <div>
        {itens.map((item) => (
          <MenuItem key={item.id} openMenu={openMenu} onClick={() => navigate(item.link)}>
            <ButtonIcon alt="" src={item.icon} />
            <span>{item.label}</span>
          </MenuItem>
        ))}
      </div>
        <Divider openMenu={openMenu} />
    </Container>
  );
}

export default MenuOne
