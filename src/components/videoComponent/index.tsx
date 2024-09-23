import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./style";


function VideoComponent() {
  return (
    <Container>
        <ImageBanner src="https://i.ytimg.com/vi/tI55Zu9uZEM/maxresdefault.jpg" />
        <TitleContainer>
            <ChannelImage>
                RM
            </ChannelImage>
            <TextContainer>
                <Title>Marília Medonça -Leão - Decretos Reais 2</Title>
                <TextCard>Marília Medonça</TextCard>
                <TextCard>109 mi de visulização - há 2 meses</TextCard>
            </TextContainer>
        </TitleContainer>
    </Container>
  );
}

export default VideoComponent;
