import { useContext } from "react";
import { 
  ButtonIcon,
  Container,
  Divider,
  MenuItem
} from '../../Menu/style'
import Inicio from '../icons/inicio.png'
import MenuContext from "../../../contexts/menuContext";
import Shorts from '../icons/shorts.png'
import Inscricoes from '../icons/inscricoes.png'
import Biblioteca from '../icons/biblioteca.png'


const itens = [
  { id: 1, label: "Início", icon: Inicio},
  { id: 2, label: "Shorts", icon: Shorts },
  { id: 3, label: "Inscrições", icon: Inscricoes },
  { id: 4, label: "Biblioteca", icon: Biblioteca },
];

function MenuOne() {

  const { openMenu } = useContext(MenuContext);

  return (
    <Container openMenu={openMenu}>
      <div>
        {itens.map((item) => (
          <MenuItem key={item.id} openMenu={openMenu}>
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
