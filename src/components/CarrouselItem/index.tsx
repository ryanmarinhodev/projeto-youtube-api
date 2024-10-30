// Carousel.tsx
import React, { useContext, useRef } from 'react';
import {
  CarouselWrapperFilho,
  ArrowButton,
  ItemsContainer,
  Item,
} from './styles'; // Ajuste o caminho conforme necessário
import MenuContext from 'contexts/menuContext';

interface CarouselItem {
  id: number;
  name: string;
}

const carouselItems: CarouselItem[] = [
  { id: 1, name: 'Tudo' },
  { id: 2, name: 'Games' },
  { id: 3, name: 'Futebol' },
  { id: 4, name: 'Entretenimento' },
  { id: 5, name: 'Música' },
  { id: 6, name: 'Pessoas e blog' },
  { id: 7, name: 'Automóveis e veículos' },
  { id: 8, name: 'Animais e Pet' },
  { id: 9, name: 'Notícias e Política' },
  { id: 10, name: 'Comédia' },
  { id: 11, name: 'Shorts' },
  { id: 12, name: 'Infantil' },
  { id: 13, name: 'Vida a dois' },
  { id: 14, name: 'Esportes' },
  { id: 15, name: 'Memes' },
  { id: 16, name: 'Jogos PC' },
  { id: 17, name: 'Jornais' },
  { id: 18, name: 'Kids' },
  { id: 19, name: 'Hits do momento' },
  { id: 20, name: 'História das civilizações' },
  { id: 21, name: 'Ciência' },
  { id: 22, name: 'Viagens pelo Mundo' },
  { id: 23, name: 'Séries' },
  { id: 24, name: 'Novidades' },
  { id: 25, name: 'Educação' },
  { id: 26, name: 'Ciência e tecnologia' },
  { id: 27, name: 'Documentários' },
  { id: 28, name: 'Economia' },
  { id: 29, name: 'Investimentos e finanças' },
  { id: 30, name: 'Moda e estilo' },
  { id: 31, name: 'Comunicação' },
  { id: 32, name: 'Beleza' },
];

const ScrollButton: React.FC<{
  direction: 'left' | 'right';
  onClick: () => void;
}> = ({ direction, onClick }) => (
  <ArrowButton onClick={onClick} position={direction}>
    {direction === 'left' ? '<' : '>'}
  </ArrowButton>
);

interface CarouselProps {
  categorySelection: (id: number) => void;
}

const Carousel: React.FC<CarouselProps> = ({ categorySelection }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { openMenu } = useContext(MenuContext);

  const handleScroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <ScrollButton direction="left" onClick={() => handleScroll('left')} />
      <CarouselWrapperFilho openMenu={openMenu}>
        <ItemsContainer ref={containerRef}>
          {carouselItems.map((item) => (
            <Item key={item.id} onClick={() => categorySelection(item.id)}>
              {item.name}
            </Item>
          ))}
        </ItemsContainer>
      </CarouselWrapperFilho>
      <ScrollButton direction="right" onClick={() => handleScroll('right')} />
    </>
  );
};

export default Carousel;
