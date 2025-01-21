import "./NotFound.scss";
import errorDog from "../../assets/images/dog-404.png";

interface NotFoundProps {
  content?: string;
}

const NotFound = ({ content }: NotFoundProps) => {
  return (
    <div className="not-found">
      <h1 className="not-found__heading">Oops!</h1>
      <img className="not-found__image" src={errorDog} />
      <h2 className="not-found__subheading">
        {content ? content : "Something is missing"}
      </h2>
    </div>
  );
};

export default NotFound;
