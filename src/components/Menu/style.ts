import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
  width: ${({ openMenu }) => (openMenu ? '250px' : '100px')};
  height: calc(100vh - 55px); /* Deixa a borda como footer, caso precise tirar só deixar 100vh */
  box-sizing: border-box;
  padding: 5px 10px 10px 5px;
  display: flex;
  align-items: ${({ openMenu }) => (openMenu ? 'normal;' : 'center')};;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden; /* Esconde o scroll horizontal */
  transition: width 0.3s ease;
  position: sticky;
  top: 55px;
 
`;

export const MenuItem = styled.div<{ openMenu: boolean }>`
  width: 98%;
  display: flex;
  align-items: center;
  margin: 0.2rem 0; 
  min-height: ${({ openMenu }) => (openMenu ? '45px' : '70px')};
  border-radius: 10px;
  cursor: pointer;
  padding: 2px 15px;
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
  display: ${({ openMenu }) => (openMenu ? 'flex' : 'none')};
`;