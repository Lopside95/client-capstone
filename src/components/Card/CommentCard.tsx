import MyPill from "../ui/Pill/MyPill";
import { Post } from "../../utils/types/posts";
import "./Card.scss";
import { useLocation, useNavigate } from "react-router";
import { Button } from "evergreen-ui";

const CommentCard = (post: Post) => {
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
    comments,
    id,
  }: Post = post;

  const formatTime = (createdAt: Date) => {
    const date = new Date(created_at);
    const timestamp = date.toLocaleDateString("en-GB");
    return timestamp;
  };

  return (
    <section
      className={
        location.pathname.includes("/posts/") ? `card card-posts` : `card`
      }
      onClick={() => navigate(`/posts/${id}`)}
    >
      <article className="card__heading">
        <h1 className="card__heading-title">{title}</h1>
        <MyPill className="card__heading-date">{formatTime(created_at)}</MyPill>
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
        <h5 className="comments-header">Comments</h5>
        {comments?.map((comment) => {
          return (
            <div key={comment.id} className="comment">
              <p>{comment.content} </p>
              <MyPill>{formatTime(comment.created_at)}</MyPill>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default CommentCard;
