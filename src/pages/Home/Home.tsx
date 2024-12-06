import { useNavigate } from "react-router";
// import Button from "../../components/ui/Button/Button";
import "./Home.scss";
import MapComponent, { LocationType } from "../../components/Map/Map";
import { useEffect, useState } from "react";
import PrimaryButton from "../../components/ui/PrimaryButton/PrimaryButton";
import { Button, SelectMenu } from "evergreen-ui";
import { getPosts } from "../../utils/posts";
import { Post, Tag } from "../../utils/types/posts";
import Card from "../../components/Card/Card";
import Select from "react-select/base";
import { TagSchema } from "../../utils/types/schemas";
import { getTags } from "../../utils/api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import "../../components/ui/PrimaryButton/PrimaryButton.scss";

const Home = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState<Post[]>();
  const [allTags, setAllTags] = useState<TagSchema[]>();
  const [selectedTags, setSelectedTags] = useState<TagSchema>();

  const fetchData = async () => {
    const postsData = await getPosts();
    const res = await getTags();
    setPosts(postsData);
    setAllTags(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const tagOptions = allTags?.map((tag) => ({
    label: tag.name,
    value: tag.id,
  }));

  // const form = useForm<TagSchema[]>({
  //   resolver: zodResolver(tag),
  //   defaultValues: {}
  // })

  return (
    <div className="home">
      {/* <header className="header">HOME</header> */}
      <main className="home__main">
        <section className="landing">
          <h1 className="landing__text">
            We help people find lost dogs and help stray dogs find homes
          </h1>
          <img src="/cover_2.svg" className="landing__image" />

          {/* <HomeImage className="image" /> */}
          {/* <img src="../../../public/cover_2.svg" /> */}
        </section>
        <section className="subnav">
          {/* <Button
            backgroundColor="white"
            className="subnav__button"
            appearance="primary"
          >
            Report
          </Button> */}

          <PrimaryButton
            className="subnav__button"
            onClick={() => navigate("/create-post")}
          >
            Report
          </PrimaryButton>
          <PrimaryButton className="subnav__button">Find</PrimaryButton>
          {/* <PrimaryButton
            className="sub__button"
            onClick={() => navigate("/posts")}§
          >
            I'm looking for a dog
          </PrimaryButton> */}
        </section>
        <section className="posts">
          {allTags?.map((tag) => [])}
          {posts?.map((post) => (
            <Card key={post.id} {...post} />
          ))}
        </section>
        {/* <MapComponent /> */}
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
