import styled from 'styled-components';

export const Container = styled.div<{ openMenu: boolean }>`
  width: ${({ openMenu }) => (openMenu ? '250px' : '100px')};
  height: 100vh;
  box-sizing: border-box;
  padding: 0px 10px 10px 5px;
  display: flex;
  align-items: ${({ openMenu }) => (openMenu ? 'normal' : 'center')};
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  transition: width 0.3s ease;
  position: fixed;
  top: 55px;
  z-index: 10;
`;

export const MenuItem = styled.div<{ openMenu: boolean }>`
  width: 98%;
  display: flex;
  align-items: center;
  margin: 0.2rem 0;
  min-height: ${({ openMenu }) => (openMenu ? '45px' : '70px')};
  border-radius: 10px;
  padding: 2px 15px;
  box-sizing: border-box;
  flex-direction: ${({ openMenu }) => (openMenu ? 'row' : 'column')};
  justify-content: ${({ openMenu }) => (openMenu ? 'flex-start' : 'center')};
  span {
    font-weight: ${({ openMenu }) => (openMenu ? '600' : '400')};
    margin-left: ${({ openMenu }) => (openMenu ? '20px' : '0px')};
    font-size: ${({ openMenu }) => (openMenu ? '16px' : '12px')};
  }
  cursor: pointer;

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
  margin: 1rem 0;
  width: 90%;
  justify-content: center;
  display: ${({ openMenu }) => (openMenu ? 'flex' : 'none')};
`;
