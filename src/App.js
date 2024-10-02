import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { MenuUserContext } from "./contexts/menuContext";
import HomePage from "./pages/Home";
import Libery from "./pages/Lib";
import Inscricoes from "./pages/Inscricoes";
import Shorts from "./pages/Shorts";
import { UserStorage } from "./contexts/contextApi";
import Login from "./login";



function App() {
  return (
    


    <UserStorage>
      <BrowserRouter>
        <div className="App">
          <MenuUserContext>
            <Header />
            <div style={{ width: "100%", display: "flex" }}>
              <Menu />
              <div
                style={{
                  width: "100%",
                  padding: "50px 70px",
                  boxSizing: "border-box",
                  justifyContent: "center",
                }}
              >
                <Routes>
                  <Route path="/" element={<HomePage />}></Route>
                  <Route path="/shorts" element={<Shorts />}></Route>
                  <Route path="/inscricoes" element={<Inscricoes />}></Route>
                  <Route path="/biblioteca" element={<Libery />}></Route>
                  <Route path="/login" element={<Login />}></Route>
                </Routes>
              </div>
            </div>
          </MenuUserContext>
        </div>
      </BrowserRouter>
    </UserStorage>
  );
}


// Deixar a tela de login estilizada 2 dias ()))())()
// Implementar um drop down menu com react 3-4 dias - quando clicado na logo do canal
// Criar a tela e integração para cadastro de usuário (enviar nome, e-mail e senha. Mostrando alert quando um usuario se cadastrar) 4 dias
// Criar a tela e integração para cadastro de vídeos 5 dias
// Implementação de pesquisa (pegar o valor do input de pesquisa, fazer a requisição para o método de 
// pequisa daquela api de estudos, no retorno dos videos da api, substitui no estado desse projeto) 5 dias

export default App;
