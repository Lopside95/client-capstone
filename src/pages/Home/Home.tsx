import { useNavigate } from "react-router";
import Button from "../../components/ui/Button/Button";
import "./Home.scss";
import MapComponent, { LocationType } from "../../components/Map/Map";
import { useEffect, useState } from "react";

const Home = () => {
  const navigate = useNavigate();

  const [userLocation, setUserLocation] = useState<LocationType>({
    latitude: 0,
    longitude: 0,
  });

  const getUserLocation = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLocation({
        ...userLocation,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      // console.log(position.coords.latitude, position.coords.longitude);
    });
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  if (userLocation) {
    console.log(" user loc", userLocation);
  }

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
        {/* <section className="map">
          <MapComponent userLocation={userLocation} />
        </section> */}
      </main>
    </div>
  );
};

export default Home;
