import { useContext } from 'react';
import { Container, Divider, MenuItem, ButtonIcon } from './style';
import MenuContext from '../../contexts/menuContext';
import { useNavigate } from 'react-router-dom';

import Inicio from './icons/inicio.png';
import Shorts from './icons/shorts.png';
import Inscricoes from './icons/inscricoes.png';
import Biblioteca from './icons/biblioteca.png';

import Historico from './icons/historia.png';
import Play from './icons/video (1).png';
import Whatch from './icons/relogio.png';
import Like from './icons/gostar.png';
import Mix from './icons/botao-play.png';

import Alta from './icons/fogo.png';
import Shopping from './icons/sacola.png';
import Música from './icons/musica.png';
import Filmes from './icons/filme.png';
import Aovivo from './icons/live.png';
import Jogos from './icons/joystick.png';
import Notícias from './icons/news.png';
import Esportes from './icons/troféu.png';
import Aprender from './icons/lampada.png';

import youtube from './icons/premium.png';
import youtubeStudio from './icons/studio.png';
import youtubeMusic from './icons/music.png';
import youtubeKids from './icons/kids.png';

const menuData = [
  {
    id: 1,
    section: 'Seção 1',
    items: [
      { id: 1, label: 'Início', icon: Inicio, link: '/' },
      { id: 2, label: 'Shorts', icon: Shorts, link: '/shorts' },
      { id: 3, label: 'Inscrições', icon: Inscricoes, link: '/inscricoes' },
      { id: 4, label: 'Biblioteca', icon: Biblioteca, link: '/biblioteca' },
    ],
  },
  {
    id: 2,
    section: 'Seção 2',
    items: [
      { id: 5, label: 'Histórico', icon: Historico, link: '/' },
      { id: 6, label: 'Seus Vídeos', icon: Play, link: '/' },
      { id: 7, label: 'Assistir Mais Tarde', icon: Whatch, link: '/' },
      { id: 8, label: 'Vídeos marcados como ..', icon: Like, link: '/' },
      { id: 9, label: 'Mix - Cd completo', icon: Mix, link: '/' },
    ],
  },
  {
    id: 3,
    section: 'Seção 3',
    items: [
      { id: 10, label: 'Em alta', icon: Alta, link: '/' },
      { id: 11, label: 'Shopping', icon: Shopping, link: '/' },
      { id: 12, label: 'Música', icon: Música, link: '/' },
      { id: 13, label: 'Filmes', icon: Filmes, link: '/' },
      { id: 14, label: 'Ao vivo', icon: Aovivo, link: '/' },
      { id: 15, label: 'Jogos', icon: Jogos, link: '/' },
      { id: 16, label: 'Notícias', icon: Notícias, link: '/' },
      { id: 17, label: 'Esportes', icon: Esportes, link: '/' },
      { id: 18, label: 'Aprender', icon: Aprender, link: '/' },
    ],
  },
  {
    id: 4,
    section: 'Seção 4',
    items: [
      { id: 10, label: 'youtube', icon: youtube, link: '/' },
      { id: 11, label: 'youtubeStudio', icon: youtubeStudio, link: '/' },
      { id: 12, label: 'youtubeMusic', icon: youtubeMusic, link: '/' },
      { id: 13, label: 'youtubeKids', icon: youtubeKids, link: '/' },
    ],
  },
];

function HomeMenu() {
  const { openMenu } = useContext(MenuContext);
  const navigate = useNavigate();

  return (
    <Container openMenu={openMenu}>
      {menuData.map((section) => (
        <div key={section.id}>
          {section.items.map((item) => (
            <MenuItem
              key={item.id}
              openMenu={openMenu}
              onClick={() => navigate(item.link)}
            >
              <ButtonIcon alt={item.label} src={item.icon} />
              <span>{item.label}</span>
            </MenuItem>
          ))}
          <Divider openMenu={openMenu} />
        </div>
      ))}
    </Container>
  );
}

export default HomeMenu;
