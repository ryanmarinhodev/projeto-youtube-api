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
  transition: width 0.3s ease; 
`;

export const MenuItem = styled.div<{ openMenu: boolean }>`
  width: 90%;
  min-height: ${({ openMenu }) => (openMenu ? '40px' : '70px')};
  border-radius: 10px;
  cursor: pointer;
  margin: 5px 0;  
  padding: 2px 17px;
  box-sizing: border-box;
  flex-direction: ${({ openMenu }) => (openMenu ? 'row' : 'column')};
  justify-content: ${({ openMenu }) => (openMenu ? 'none' : 'center')};

  span {
    font-weight: ${({ openMenu }) => (openMenu ? '600' : '400')};
    margin-left: ${({ openMenu }) => (openMenu ? '20px' : 'none')};
    font-size: ${({ openMenu }) => (openMenu ? '16px' : '12px')};
  }
  
  &:hover {
    background-color: #f2f2f2;
  }
`;

export const ButtonIcon = styled.img `
    width: 25px
`;