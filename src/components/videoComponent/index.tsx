import {
  ChannelImage,
  Container,
  ImageBanner,
  TextCard,
  TextContainer,
  Title,
  TitleContainer,
} from './style';

interface VideoComponentProps {
  video: {
    title: string;
    channel: string;
    views: string;
    time: string;
    image: string;
  };
}

function VideoComponent({ video }: VideoComponentProps) {
  return (
    <Container>
      <ImageBanner src={video.image} alt={`Thumbnail de ${video.title}`} />
      <TitleContainer>
        <ChannelImage>RM</ChannelImage>
        <TextContainer>
          <Title>{video.title}</Title>
          <TextCard>{video.channel}</TextCard>
          <TextCard>
            {video.views}
            {video.time}
          </TextCard>
        </TextContainer>
      </TitleContainer>
    </Container>
  );
}

export default VideoComponent;
