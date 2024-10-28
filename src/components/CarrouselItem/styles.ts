import styled from 'styled-components';

export const ArrowButton = styled.button<{ position: 'left' | 'right' }>`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  padding: 0 70px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ position }) => (position === 'left' ? 'left: 0;' : 'right: 0;')}
`;

export const CarouselWrapper = styled.div<{ openMenu: boolean }>`
  width: ${({ openMenu }) => (openMenu ? '75%' : '84%')};
  height: 50px;
  display: flex;
  align-items: center;
  background-color: white;
  margin: ${({ openMenu }) => (openMenu ? '0 100px 0 100px' : '100px')};
  position: fixed;
  z-index: 900;
  overflow: hidden;
`;

export const ItemsContainer = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 10px 10px; /* Espaço para as setas */
  flex-wrap: nowrap;
  max-width: 100%;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.div`
  padding: 8px 16px;
  background-color: #f1f1f1;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`;
