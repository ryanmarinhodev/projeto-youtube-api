import VideoComponent from "../../components/videoComponent";
import { Container } from "./styles";

function HomePage() {

  const videos = [
    {
      image: "",
      title: "Marília Medonça - Leão - Decretos Reais 2",
      channel: "Marília Medonça",
      views: "109 mi",
      time: "2 meses",
    },
    {
      image: "",
      title: "Marília Medonça - Leão - Decretos Reais 2",
      channel: "Marília Medonça",
      views: "109 mi",
      time: "2 meses",
    },
    {
      image: "",
      title: "Marília Medonça - Leão - Decretos Reais 2",
      channel: "Marília Medonça",
      views: "109 mi",
      time: "2 meses",
    },
    {
      image: "",
      title: "Marília Medonça - Leão - Decretos Reais 2",
      channel: "Marília Medonça",
      views: "109 mi",
      time: "2 meses",
    },
    {
      image: "",
      title: "Marília Medonça - Leão - Decretos Reais 2",
      channel: "Marília Medonça",
      views: "109 mi",
      time: "2 meses",
    },
    {
      image: "",
      title: "Marília Medonça - Leão - Decretos Reais 2",
      channel: "Marília Medonça",
      views: "109 mi",
      time: "2 meses",
    },
    {
      image: "",
      title: "Marília Medonça - Leão - Decretos Reais 2",
      channel: "Marília Medonça",
      views: "109 mi",
      time: "2 meses",
    },
  ];

  return (
    <div>
      <Container>
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
