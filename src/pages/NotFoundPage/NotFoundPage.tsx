import "./NotFoundPage.scss";
import errorDog from "../../assets/images/dog-404.png";
interface NotFoundProps {
  content?: string;
}

const NotFoundPage = ({ content }: NotFoundProps) => {
  return (
    <div className="not-found-page">
      <h1 className="not-found-page__heading">Oops!</h1>
      <img className="not-found-page__image" src={errorDog} />
      <h2 className="not-found-page__subheading">
        {content ? content : "We can't find this page"}
      </h2>
    </div>
  );
};

export default NotFoundPage;
