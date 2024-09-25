import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./style";


function VideoComponent({ video }: any) {
  return (
    <Container>
        <ImageBanner src="https://i.ytimg.com/vi/tI55Zu9uZEM/maxresdefault.jpg" />
        <TitleContainer>
            <ChannelImage>
                RM
            </ChannelImage>
            <TextContainer>
                <Title>{video.title}</Title>
                <TextCard>{video.channel}</TextCard>
                  <TextCard>{video.viws} visulizações - {video.time}</TextCard>
            </TextContainer>
        </TitleContainer>
    </Container>
  );
}

export default VideoComponent;
