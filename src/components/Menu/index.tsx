import { useContext } from "react";
import { 
  Container,
 
} from './style'
import MenuContext from "../../contexts/menuContext";
import MenuOne from "./container/inicio";





function HomeMenu() {
  const { openMenu } = useContext(MenuContext);


  return ( 
    <Container openMenu={openMenu}>
      {/* Seção 1 */}
      <div>
        <MenuOne />
      </div>
    </Container>
  );
}

export default HomeMenu;
