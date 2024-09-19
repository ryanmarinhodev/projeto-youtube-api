import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
  width: ${({ openMenu }) => (openMenu ? '250px' : '100px')};
  height: 100vh;
  box-sizing: border-box;
  padding: 65px 10px 10px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden; /* Esconde o scroll horizontal */
  transition: width 0.3s ease;
`;

export const MenuItem = styled.div<{ openMenu: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0.2rem 0;  /* Reduzimos a margem */
  min-height: ${({ openMenu }) => (openMenu ? '40px' : '70px')};
  border-radius: 10px;
  cursor: pointer;
  padding: 2px 17px;
  box-sizing: border-box;
  flex-direction: ${({ openMenu }) => (openMenu ? 'row' : 'column')};
  justify-content: ${({ openMenu }) => (openMenu ? 'flex-start' : 'center')};
  
  span {
    font-weight: ${({ openMenu }) => (openMenu ? '600' : '400')};
    margin-left: ${({ openMenu }) => (openMenu ? '20px' : '0px')};
    font-size: ${({ openMenu }) => (openMenu ? '16px' : '12px')};
  }
  
  &:hover {
    background-color: #f2f2f2;
  }
`;

export const ButtonIcon = styled.img`
  width: 25px;
`;

export const Divider = styled.hr<{ openMenu: boolean }>`
  border: none;
  border-top: 1px solid #ccc;
  margin: 1rem 0;  /* Reduza o espaçamento vertical */
  width: 90%;  /* Pode ajustar para garantir alinhamento com os itens */
  justify-content: center;
  display: ${({ openMenu }) => (openMenu ? 'flex' : 'none')};
`;

