import { useContext } from "react";
import { 
  ButtonIcon,
  Container,
  MenuItem
} from '../style'
import Inicio from '../icons/inicio.png'
import MenuContext from "../../../contexts/menuContext";





function HomeMenu() {
  const { openMenu } = useContext(MenuContext);
  // Aqui você define os itens com valores únicos

const itens = [
  { id: 1, label: "Início", icon: Inicio },
  { id: 2, label2: "Início2", icon: Inicio },
];

  return (
    <Container openMenu={openMenu}>
      {/* Seção 1 */}
      <div>
        {itens.map((item) => (
          <MenuItem key={item.id} openMenu={openMenu}>
            <ButtonIcon alt="" src={item.icon} />
            <span>{item.label}</span>
            <span>{item.label2}</span>
            <span>{item.label2}</span>
            <span>{item.label2}</span>
            <span>{item.label2}</span>
          </MenuItem>
        ))}
      </div>
    </Container>
  );
}

export default HomeMenu;
