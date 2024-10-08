import { useContext } from 'react';
import VideoComponent from '../../components/videoComponent';
import { Container } from './styles';
import MenuContext from '../../contexts/menuContext';

function HomePage() {
  const { openMenu } = useContext(MenuContext);

  const videos = [
    {
      image: '',
      title: 'Marília Medonça - Leão - Decretos Reais 2',
      channel: 'Marília Medonça',
      views: '109 mi',
      time: '2 meses',
    },
    {
      image: '',
      title: 'Marília Medonça - Leão - Decretos Reais 2',
      channel: 'Marília Medonça',
      views: '109 mi',
      time: '2 meses',
    },
    {
      image: '',
      title: 'Marília Medonça - Leão - Decretos Reais 2',
      channel: 'Marília Medonça',
      views: '109 mi',
      time: '2 meses',
    },
    {
      image: '',
      title: 'Marília Medonça - Leão - Decretos Reais 2',
      channel: 'Marília Medonça',
      views: '109 mi',
      time: '2 meses',
    },
    {
      image: '',
      title: 'Marília Medonça - Leão - Decretos Reais 2',
      channel: 'Marília Medonça',
      views: '109 mi',
      time: '2 meses',
    },
    {
      image: '',
      title: 'Marília Medonça - Leão - Decretos Reais 2',
      channel: 'Marília Medonça',
      views: '109 mi',
      time: '2 meses',
    },
    {
      image: '',
      title: 'Marília Medonça - Leão - Decretos Reais 2',
      channel: 'Marília Medonça',
      views: '109 mi',
      time: '2 meses',
    },
  ];

  return (
    <div>
      <Container openMenu={openMenu}>
        <>
          {videos.map((video) => (
            <VideoComponent video={video} />
          ))}
        </>
      </Container>
    </div>
  );
}

export default HomePage;
