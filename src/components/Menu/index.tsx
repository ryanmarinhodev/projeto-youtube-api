import { 
  Container,
  MenuItem
  } from "./style";
 
  const itens = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  
  function Menu() {
      return (
        <Container>
          {itens.map(() => (
            <MenuItem>Inicio</MenuItem>
          ))}
        </Container>
      );
  }
  
  export default Menu;