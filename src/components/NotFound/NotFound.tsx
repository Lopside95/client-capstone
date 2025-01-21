import "./NotFound.scss";

interface NotFoundProps {
  content?: string;
}

const NotFound = ({ content }: NotFoundProps) => {
  return (
    <div className="not-found">
      <h1 className="not-found__heading">Oops!</h1>
      <img className="not-found__image" src="/src/assets/images/dog-404.png" />
      <h2 className="not-found__subheading">
        {content ? content : "Something is missing"}
        {/* {content ? content + "is missing" : "Something is missing"}{" "} */}
      </h2>
      {/* <h2 className="not-found__subheading">{`${
        content || "Something"
      } is missing`}</h2> */}
    </div>
  );
};

export default NotFound;
