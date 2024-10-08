import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 55px;
  background-color: #fff;
  padding: 0 16px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  position: sticky;
  top: 0px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonContainer = styled.div<{ margin?: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: ${({ margin }) => (margin ? margin : 0)};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const ButtonIcon = styled.img`
  width: 20px;
`;

export const SearchContainer = styled.div`
  display: flex;
`;

export const SearchInputContainer = styled.div`
  width: 450px;
  height: 34px;
  border: 1px solid #d3d3d3;
  border-radius: 40px 0 0 40px;
  display: flex;
  align-items: center;
  padding: 0 16px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 25px;
  outline: none;
  border: none;
`;

export const SearchButton = styled.div`
  border-radius: 0 40px 40px 0;
  height: 35px;
  width: 70px;
  background-color: #f8f8f8;
  border: 1px solid #d3d3d3;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const HeaderButton = styled.div`
  width: 200px;
  display: flex;
`;

export const LoginButton = styled.button`
  display: flex;
  width: 120px;
  align-items: center;
  background-color: white;
  color: #065fd4; /* Azul típico do YouTube */
  border: 1px solid #ccc;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 50px; /* Borda arredondada */
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  outline: none;

  &:hover {
    background-color: #f0f0f0;
  }

  &:focus {
    box-shadow: 0px 0px 3px 2px rgba(6, 95, 212, 0.5);
  }

  img {
    margin-right: 8px; /* Espaçamento entre o ícone e o texto */
  }
`;
