// import { Pill } from "evergreen-ui";
import MyPill from "../ui/Pill/MyPill";
import { CardInterface, Post, UserComment } from "../../utils/types/posts";
import TagButton from "../ui/Tag/TagButton";
import "./Card.scss";
import StatusBadge from "../ui/StatusBadge/StatusBadge";
import { useLocation, useNavigate } from "react-router";
import { Button } from "evergreen-ui";
import { PostType } from "../../utils/types/enums";
import { createRef, useEffect } from "react";
import { baseUrl } from "../../utils/posts";

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

  const formatTime = () => {
    const date = new Date(created_at);
    const timestamp = date.toLocaleDateString("en-GB");
    console.log(timestamp);
  };

  formatTime();

  return (
    <section
      className={
        location.pathname.includes("/posts/") ? `card card-posts` : `card`
      }
      onClick={() => navigate(`/posts/${id}`)}
    >
      <article className="card__heading">
        <h1 className="card__title">{title}</h1>
        <MyPill color="red">{type}</MyPill>
        <MyPill>{status}</MyPill>
      </article>
      <article className="card__body">
        <div className="card__desc">
          <h1 className="card__desc-label">Description</h1>
          <p className="card__desc-content">{description}</p>
        </div>
        <img className="card__img" src={img} />
        {/* <img className="card__img" src={`${baseUrl}/images/${img}`} /> */}
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
            <p key={comment.id} className="comment">
              {comment.content}{" "}
            </p>
          );
        })}
      </article>
    </section>
  );
};

export default Card;
