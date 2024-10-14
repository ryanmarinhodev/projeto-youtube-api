import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import { MenuUserContext } from './contexts/menuContext';
import HomePage from './pages/Home';
import Libery from './pages/Lib';
import Inscricoes from './pages/Inscricoes';
import Shorts from './pages/Shorts';
import { UserStorage } from './contexts/contextApi';
import Login from './login';
import 'react-toastify/dist/ReactToastify.css';
import CreateUser from './login/createUser';
import { CreateUserStorage } from './contexts/createUserContext';

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Routes>
          {/* Rota de Login fora do contexto de Menu */}
          <Route path="/login" element={<Login />} />
          <Route
            path="/user"
            element={
              <CreateUserStorage>
                <CreateUser />
              </CreateUserStorage>
            }
          />

          {/* Outras rotas com contexto de Menu */}
          <Route
            path="/*"
            element={
              <MenuUserContext>
                <div className="App">
                  <Header />
                  <div style={{ width: '100%', display: 'flex' }}>
                    <Menu />
                    <div
                      style={{
                        width: '100%',
                        padding: '50px 70px',
                        boxSizing: 'border-box',
                        justifyContent: 'center',
                      }}
                    >
                      <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/shorts" element={<Shorts />} />
                        <Route path="/inscricoes" element={<Inscricoes />} />
                        <Route path="/biblioteca" element={<Libery />} />
                      </Routes>
                    </div>
                  </div>
                </div>
              </MenuUserContext>
            }
          />
        </Routes>
      </UserStorage>
    </BrowserRouter>
  );
}

// Criar a tela e integração para cadastro de vídeos 5 dias
// Implementação de pesquisa (pegar o valor do input de pesquisa, fazer a requisição para o método de
// pequisa daquela api de estudos, no retorno dos videos da api, substitui no estado desse projeto) 5 dias

//ajeitar o dropdown nome ao lado

export default App;
