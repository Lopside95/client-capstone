// import { Pill } from "evergreen-ui";
import MyPill from "../ui/Pill/MyPill";
import { CardInterface, Post, UserComment } from "../../utils/types/posts";
import TagButton from "../ui/Tag/TagButton";
import "./Card.scss";
import StatusBadge from "../ui/StatusBadge/StatusBadge";
import { Link, useLocation, useNavigate } from "react-router";
import { Button, LocateIcon, MapMarkerIcon } from "evergreen-ui";
import { PostType } from "../../utils/types/enums";
import { createRef, useEffect } from "react";
import { baseUrl } from "../../utils/posts";
import { primary } from "../../pages/Home/Home";

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

  const googleMaps = `https://www.google.com/maps?q=${latitude},${longitude}`;

  // formatTime();

  return (
    <section
      className={
        location.pathname.includes("/posts/") ? `card card-posts` : `card`
      }
      onClick={() => navigate(`/posts/${id}`)}
    >
      <article
        className="card__heading"
        // onClick={() => navigate(`/posts/${id}`)}
      >
        <h1 className="card__heading-title">{title}</h1>
        {/* <MyPill color="red">{type}</MyPill> */}
        <div className="card__heading-right">
          <Link target="_blank" to={googleMaps}>
            <MapMarkerIcon color={primary} />
          </Link>
          <MyPill className="card__heading-date">
            {formatTime(created_at)}
          </MyPill>
        </div>
        {/* <MyPill>{status}</MyPill> */}
        {/* <MyPill>{status}</MyPill> */}
      </article>
      <article
        className="card__body"
        // onClick={() => navigate(`/posts/${id}`)}
      >
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
        <p className="comments-header">Comments</p>
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

export default Card;
