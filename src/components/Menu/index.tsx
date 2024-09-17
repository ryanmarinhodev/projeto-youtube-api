import { useContext } from "react";
import { 
  ButtonIcon,
  Container,
  MenuItem
  } from "./style";
import MenuContext from "../../contexts/menuContext";
import Notification from '../../assets/sino.png'
 
  const itens = [0,0,0,0,0]
  

  function Menu() {
    const {openMenu} = useContext(MenuContext)
      return (
        <Container openMenu={openMenu}>
          {itens.map(() => (
            <MenuItem openMenu={openMenu}>
              <ButtonIcon alt="" src={Notification} />
              <span>Inicio</span>
            </MenuItem>
          ))}
        </Container>
      );
  }
  
  export default Menu;

  