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

function formatViews(views: number) {
  if (views >= 1000000) {
    return `${(views / 1000000).toFixed(0)} mi de visualizações`;
  } else if (views >= 1000) {
    return `${(views / 1000).toFixed(0)} mil visualizações`;
  } else {
    return `${views} visualizações`;
  }
}

function formatTime(publishedAt: string) {
  const today = new Date();
  const publishedDate = new Date(publishedAt);
  const differenceInTime = today.getTime() - publishedDate.getTime();
  const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));

  const differenceInMonths =
    today.getMonth() -
    publishedDate.getMonth() +
    12 * (today.getFullYear() - publishedDate.getFullYear());

  const differenceInYears = today.getFullYear() - publishedDate.getFullYear();

  if (differenceInDays === 0) {
    return ' - hoje';
  } else if (differenceInDays === 1) {
    return ' - há 1 dia';
  } else if (differenceInDays < 30) {
    return ` - há ${differenceInDays} dias`;
  } else if (differenceInMonths === 1) {
    return ' - há 1 mês';
  } else if (differenceInMonths < 12) {
    return ` - há ${differenceInMonths} meses`;
  } else if (differenceInYears === 1) {
    return ' - há 1 ano';
  } else {
    return ` - há ${differenceInYears} anos`;
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
          views: formatViews(item.statistics.viewCount),
          time: formatTime(item.snippet.publishedAt),
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
