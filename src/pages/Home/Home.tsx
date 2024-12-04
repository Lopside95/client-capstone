import { useNavigate } from "react-router";
import Button from "../../components/ui/Button/Button";
import "./Home.scss";
import MapComponent from "../../components/Map/Map";

const Home = () => {
  const navigate = useNavigate();

  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude, position.coords.longitude);
  });

  return (
    <div className="home">
      <header className="header">HOME</header>
      <main className="main">
        <section className="subnav">
          <Button onClick={() => navigate("/create-post")}>
            I'm reporting a dog
          </Button>
          <Button onClick={() => navigate("/posts")}>
            I'm looking for a dog
          </Button>
        </section>
        <section className="map">
          <MapComponent />
        </section>
      </main>
    </div>
  );
};

export default Home;
