import styled from 'styled-components';

interface ContainerProps {
  openMenu: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: ${({ openMenu }) =>
    openMenu ? 'calc(100% - 300px)' : 'calc(100% - 120px)'};
  margin-left: ${({ openMenu }) => (openMenu ? '240px' : '120px')};
  max-width: 1600px;
  display: grid;
  grid-template-columns: ${({ openMenu }) =>
    openMenu ? 'repeat(3, 1fr)' : 'repeat(4, 1fr)'};
  column-gap: 20px;
  row-gap: 50px;
  flex-wrap: wrap;
  transition: margin-left 0.3s ease, width 0.3s ease;

  @media (max-width: 1024px) {
    grid-template-columns: ${({ openMenu }) =>
      openMenu ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'};
  }

  @media (max-width: 834px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 688px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
