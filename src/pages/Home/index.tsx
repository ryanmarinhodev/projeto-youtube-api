import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import VideoComponent from '../../components/videoComponent';
import { Container } from './styles';
import MenuContext from '../../contexts/menuContext';

interface Video {
  title: string;
  channel: string;
  views: string;
  time: string;
  image: string;
}

function HomePage() {
  const { openMenu } = useContext(MenuContext);
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    const API_KEY = 'AIzaSyANXYiXCORERhcMf5hKMqcXFolkC44Ms4Q';
    const API_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=BR&maxResults=50&key=${API_KEY}`;

    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL);
        console.log(response.data);

        const videoData: Video[] = response.data.items.map((item: any) => ({
          title: item.snippet.title,
          channel: item.snippet.channelTitle,
          views: 'número de visualizações',
          time: 'tempo de upload',
          image: item.snippet.thumbnails.medium.url,
        }));
        setVideos(videoData);
      } catch (error) {
        console.error('Erro ao buscar dados da API', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Container openMenu={openMenu}>
        <>
          {videos.map((video, index) => (
            <VideoComponent key={index} video={video} />
          ))}
        </>
      </Container>
    </div>
  );
}

export default HomePage;
