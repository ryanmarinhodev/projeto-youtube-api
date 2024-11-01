import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const ImageBanner = styled.img<{ openMenu: boolean }>`
  width: ${({ openMenu }) => (openMenu ? '100%' : '100%')};
  height: 210px;
  border-radius: 12px;

  @media (min-width: 1600px) {
    width: 93%;
    height: auto;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const ChannelImage = styled.div`
  background-color: beige;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 10px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: calc(100% - 50px);
`;

export const Title = styled.span`
  font-weight: 600;
  color: #0f0f0f;
`;

export const TextCard = styled.span`
  color: #8c8c8c;
  font-size: 14px;
`;
