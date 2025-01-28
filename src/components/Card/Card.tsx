import MyPill from "../ui/Pill/MyPill";
import { Post } from "../../utils/types/posts";
import "./Card.scss";
import { Link, useLocation, useNavigate } from "react-router";
import { Button } from "evergreen-ui";
import mapsThumb from "../../assets/images/maps-thumb.png";

const Card = (post: Post) => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    title,
    status,
    created_at,
    description,
    tags,
    type,
    img,
    urgency,
    updated_at,
    latitude,
    longitude,
    id,
    comments,
  }: Post = post;

  const formatTime = (createdAt: Date) => {
    const date = new Date(created_at);
    const timestamp = date.toLocaleDateString("en-GB");
    return timestamp;
  };

  const googleMapsLocation = `https://www.google.com/maps?q=${latitude},${longitude}`;

  return (
    <section
      className={
        location.pathname.includes("/posts/") ? `card card-posts` : `card`
      }
      onClick={() => navigate(`/posts/${id}`)}
    >
      <article className="card__heading">
        <h1 className="card__heading-title">{title}</h1>
        <div className="card__heading-right">
          <Link
            className="card__heading-map"
            target="_blank"
            to={googleMapsLocation}
          >
            <img
              src={mapsThumb}
              alt="Map icon and link"
              className="card__heading-map-image"
            />
          </Link>
          <MyPill className="card__heading-date">
            {formatTime(created_at)}
          </MyPill>
        </div>
      </article>
      <article className="card__body">
        <div className="card__desc">
          <h1 className="card__desc-label">Description</h1>
          <p className="card__desc-content">{description}</p>
        </div>
        <img className="card__img" src={img} />
      </article>
      <div className="card__bottom">
        {tags?.map((tag) => (
          <Button
            key={tag.id}
            className="card-tag"
            color="black"
            background="#76bd6b"
            borderRadius="18px"
            height="fit-content"
            fontSize="x-small"
            border="none"
          >
            {tag.name}
          </Button>
        ))}
      </div>
      <article className="comments">
        <p className="comments-header">Comments</p>
        {comments?.map((comment) => {
          return (
            <div key={comment.id} className="comment">
              <p>{comment.content}</p>
              <MyPill>{formatTime(comment.created_at)}</MyPill>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Card;
