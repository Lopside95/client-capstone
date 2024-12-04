import { useNavigate } from "react-router";
import Button from "../../components/ui/Button/Button";
import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <header className="header">HOME</header>
      <main className="main">
        <section className="section">
          <Button onClick={() => navigate("/create-post")}>
            I'm reporting a dog
          </Button>
          <Button onClick={() => navigate("/posts")}>
            I'm looking for a dog
          </Button>
        </section>
      </main>
    </div>
  );
};

export default Home;
