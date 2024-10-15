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
  const firstLetterChannel = video?.channel
    ? video.channel.charAt(0).toUpperCase()
    : '';

  return (
    <Container>
      <ImageBanner src={video.image} alt={`Thumbnail de ${video.title}`} />
      <TitleContainer>
        <ChannelImage>{firstLetterChannel}</ChannelImage>
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
