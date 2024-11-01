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
import { MenuDropModal } from 'contexts/dropDownContext';
import { CategoryProvider } from 'contexts/categoryContext';

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
                <CategoryProvider>
                  <div className="App">
                    <MenuDropModal>
                      <Header />
                    </MenuDropModal>
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
                </CategoryProvider>
              </MenuUserContext>
            }
          />
        </Routes>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
