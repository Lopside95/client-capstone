import { useNavigate } from "react-router";
import Button from "../../components/ui/Button/Button";
import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="main">
      <header className="header">HOME</header>
      <section className="section">
        <Button onClick={() => navigate("/create-post")}>
          I'm reporting a dog
        </Button>
        <Button onClick={() => navigate("/posts")}>
          I'm looking for a dog
        </Button>
      </section>
    </main>
  );
};

export default Home;
