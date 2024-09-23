import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { MenuUserContext } from "./contexts/menuContext";
import HomePage from "./pages/Home";
import Libery from "./pages/Lib";
import Inscricoes from "./pages/Inscricoes";
import Shorts from "./pages/Shorts";


function App() {
  return (
  <BrowserRouter>
    <div className="App">
      <MenuUserContext>
      <Header/>
      <div style={{ width: '100%', display: 'flex' }}>
        <Menu/>
        <div style={{ width: '100%', padding: '50px 70px', boxSizing: 'border-box', display: 'flex', justifyContent: 'center' }}>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/shorts" element={<Shorts />}></Route>
            <Route path="/inscricoes" element={<Inscricoes />}></Route>
            <Route path="/biblioteca" element={<Libery />}></Route>
          </Routes>
        </div>
      </div>
    </MenuUserContext>
    </div>
  </BrowserRouter>
  );
}

export default App;
