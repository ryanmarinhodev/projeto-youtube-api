import { useContext } from 'react';
import {
  ChannelImage,
  Container,
  ImageBanner,
  TextCard,
  TextContainer,
  Title,
  TitleContainer,
} from './style';
import MenuContext from 'contexts/menuContext';

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

  const { openMenu } = useContext(MenuContext);
  return (
    <Container>
      <ImageBanner
        src={video.image}
        alt={`Thumbnail de ${video.title}`}
        openMenu={openMenu}
      />
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
