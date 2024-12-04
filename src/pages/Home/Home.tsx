import { useNavigate } from "react-router";
// import Button from "../../components/ui/Button/Button";
import "./Home.scss";
import MapComponent, { LocationType } from "../../components/Map/Map";
import { useEffect, useState } from "react";
import PrimaryButton from "../../components/ui/PrimaryButton/PrimaryButton";
// import "../../components/ui/PrimaryButton/PrimaryButton.scss";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <header className="header">HOME</header>
      <main className="main">
        <section className="landing">
          <img
            src="../../../../public/cover_2.svg"
            className="landing__image"
          />

          {/* <HomeImage className="image" /> */}
          {/* <img src="../../../public/cover_2.svg" /> */}
        </section>
        <section className="subnav">
          <PrimaryButton
            className="subnav__button"
            onClick={() => navigate("/create-post")}
          >
            I'm reporting a dog
          </PrimaryButton>
          <PrimaryButton className="subnav__button">
            I'm looking for a dog
          </PrimaryButton>
          {/* <PrimaryButton
            className="sub__button"
            onClick={() => navigate("/posts")}
          >
            I'm looking for a dog
          </PrimaryButton> */}
        </section>
        {/* <section className="map">
          <MapComponent userLocation={userLocation} />
        </section> */}
      </main>
    </div>
  );
};

export default Home;

// const [userLocation, setUserLocation] = useState<LocationType>({
//   latitude: 0,
//   longitude: 0,
// });

// const getUserLocation = async () => {
//   navigator.geolocation.getCurrentPosition((position) => {
//     setUserLocation({
//       ...userLocation,
//       latitude: position.coords.latitude,
//       longitude: position.coords.longitude,
//     });
//     // console.log(position.coords.latitude, position.coords.longitude);
//   });
// };

// useEffect(() => {
//   getUserLocation();
// }, []);

// if (userLocation) {
//   console.log(" user loc", userLocation);
// }
