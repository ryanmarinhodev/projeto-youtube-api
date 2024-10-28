// Carousel.tsx
import React, { useRef } from 'react';
import { CarouselWrapper, ArrowButton, ItemsContainer, Item } from './styles'; // Ajuste o caminho conforme necessário

interface CarouselItem {
  id: number;
  name: string;
}

// Lista de itens do carrossel
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

const Carousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <ScrollButton direction="left" onClick={() => handleScroll('left')} />
      <CarouselWrapper openMenu={false}>
        <ItemsContainer ref={containerRef}>
          {carouselItems.map((item) => (
            <Item key={item.id}>{item.name}</Item>
          ))}
        </ItemsContainer>
      </CarouselWrapper>
      <ScrollButton direction="right" onClick={() => handleScroll('right')} />
    </>
  );
};

export default Carousel;
