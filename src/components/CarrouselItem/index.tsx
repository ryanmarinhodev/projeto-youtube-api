import React, { useContext, useRef } from 'react';
import {
  CarouselWrapperFilho,
  ArrowButton,
  ItemsContainer,
  Item,
} from './styles'; // Ajuste o caminho conforme necessário
import MenuContext from 'contexts/menuContext';
import { CategoryContext } from 'contexts/categoryContext';

interface CarouselItem {
  id: number | null; // Permite null para "Tudo"
  name: string;
}

const carouselItems: CarouselItem[] = [
  { id: null, name: 'Tudo' },
  { id: 20, name: 'Games' },
  { id: 17, name: 'Futebol' },
  { id: 24, name: 'Entretenimento' },
  { id: 10, name: 'Música' },
  { id: 22, name: 'Pessoas e blog' },
  { id: 2, name: 'Automóveis e veículos' },
  { id: 15, name: 'Pets e animais' },
  { id: 25, name: 'Notícias e Política' },
  { id: 23, name: 'Comédia' },
  { id: 28, name: 'Ciência e tecnologia' },
  { id: 1, name: 'Filmes e animação' },
  { id: 26, name: 'Memes' },
  { id: 27, name: 'Jogos PC' },
  { id: 18, name: 'Kids' },
  { id: 19, name: 'Camiões e eventos' },
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
  const { openMenu } = useContext(MenuContext);
  const { setCategoryIds } = useContext(CategoryContext);

  const handleScroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleItemClick = (id: number | null) => {
    if (id === null) {
      // Atualiza `categoryIds` com uma lista vazia para acionar a busca dos vídeos populares na `HomePage`
      setCategoryIds([]);
    } else {
      // Define `categoryIds` com o ID da categoria específica
      setCategoryIds([id]);
    }
  };

  return (
    <>
      <ScrollButton direction="left" onClick={() => handleScroll('left')} />
      <CarouselWrapperFilho openMenu={openMenu}>
        <ItemsContainer ref={containerRef}>
          {carouselItems.map((item) => (
            <Item key={item.id} onClick={() => handleItemClick(item.id)}>
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
