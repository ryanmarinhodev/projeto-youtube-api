import { useContext } from "react";
import { 
  Container,
} from './style'
import MenuContext from "../../contexts/menuContext";
import MenuOne from "./container/inicio";
import Segundo from "./container/segundo";
import Terceiro from "./container/terceiro";
import Quarto from "./container/quarto";





function HomeMenu() {
  const { openMenu } = useContext(MenuContext);


  return ( 
    <Container openMenu={openMenu}>
      {/* Seção 1 */}
      <div>
        <MenuOne />
        <Segundo />
        <Terceiro />
        <Quarto />
      </div>
    </Container>
  );
}

export default HomeMenu;
