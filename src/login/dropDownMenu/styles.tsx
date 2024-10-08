// DropDownMenu.styles.tsx
import styled from 'styled-components';

export const DropDownMenuContainer = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 50px;
  right: 0;
  background-color: white;
  border: 1px solid #ddd;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transform: ${({ isOpen }) =>
    isOpen ? 'translateY(0)' : 'translateY(-20px)'};
  transition: opacity 0.3s ease, transform 0.3s ease;
`;
