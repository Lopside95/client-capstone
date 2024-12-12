import MyPill from "../ui/Pill/MyPill";
import { Post } from "../../utils/types/posts";
import { Link, useLocation, useNavigate } from "react-router";
import { Button, MapMarkerIcon } from "evergreen-ui";
import { useEffect } from "react";
import { primary } from "../../pages/Home/Home";
import "./HomeCard.scss";
const HomeCard = (post: Post) => {
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
        location.pathname.includes("/posts/")
          ? `homecard homecard-posts`
          : `homecard`
      }
      onClick={() => navigate(`/posts/${id}`)}
    >
      <article className="homecard__heading">
        <h1 className="homecard__heading-title">{title}</h1>
        <div className="homecard__heading-right">
          <Link target="_blank" to={googleMapsLocation}>
            <MapMarkerIcon color={primary} />
          </Link>
          <MyPill className="homecard__heading-date">
            {formatTime(created_at)}
          </MyPill>
        </div>
      </article>
      <article className="homecard__body">
        <div className="homecard__desc">
          <h1 className="homecard__desc-label">Description</h1>
          <p className="homecard__desc-content">{description}</p>
        </div>
        <img className="homecard__img" src={img} />
      </article>
      <div className="homecard__bottom">
        {tags?.map((tag) => (
          <Button
            key={tag.id}
            className="homecard-tag"
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
      <article className="homecard__comments">
        <p className="homecard__comments-header">Comments</p>
        {comments?.map((comment) => {
          return (
            <div key={comment.id} className="homecard__comment">
              <p>{comment.content} </p>
              <MyPill>{formatTime(comment.created_at)}</MyPill>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default HomeCard;
