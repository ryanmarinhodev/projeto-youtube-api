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

// Função para formatar o número de visualizações
function formatViews(views: number) {
  if (views >= 1000000) {
    return `${(views / 1000000).toFixed(0)} milhões de visualizações`;
  } else if (views >= 1000) {
    return `${(views / 1000).toFixed(0)} mil visualizações`;
  } else {
    return `${views} visualizações`;
  }
}

// Função para formatar o tempo de upload
function formatTime(publishedAt: string) {
  const today = new Date();
  const publishedDate = new Date(publishedAt);
  const differenceInTime = today.getTime() - publishedDate.getTime();
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24)); // Converter para dias

  if (differenceInDays === 0) {
    return ' - hoje';
  } else if (differenceInDays === 1) {
    return 'enviado há 1 dia';
  } else if (differenceInDays < 7) {
    return `enviado há ${differenceInDays} dias`;
  } else {
    return publishedDate.toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  }
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
          views: formatViews(item.statistics.viewCount), // Chama a função para formatar as views
          time: formatTime(item.snippet.publishedAt), // Chama a função para formatar o tempo
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
