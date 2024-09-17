import Header from "./components/Header";
import Menu from "./components/Menu";
import { MenuUserContext } from "./contexts/menuContext";


function App() {
  return (
    <div className="App">
      <MenuUserContext>
      <Header/>
      <div style={{ width: '100%', display: 'flex' }}>
        <Menu/>
        <div style={{ backgroundColor: 'Blue', width: '100%' }}>
        </div>
      </div>
    </MenuUserContext>
    </div>
  );
}

export default App;
