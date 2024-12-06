// import { Pill } from "evergreen-ui";
import MyPill from "../ui/Pill/MyPill";
import { CardInterface, Post } from "../../utils/types/posts";
import TagButton from "../ui/Tag/TagButton";
import "./Card.scss";
import StatusBadge from "../ui/StatusBadge/StatusBadge";
import { useLocation, useNavigate } from "react-router";
import { secondary } from "../ui/Input/Input";
import { Button } from "evergreen-ui";

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

  return (
    // <section className={`${location.pathname.includes("/posts/")} card card-posts`} onClick={() => navigate(`/posts/${id}`)}>
    <section
      className={
        location.pathname.includes("/posts/") ? `card card-posts` : `card`
      }
      onClick={() => navigate(`/posts/${id}`)}
    >
      <article className="card__heading">
        <h1 className="card__title">{title}</h1>
        {/* <MyPill color="red">{urgency}</MyPill>
        <StatusBadge color="blue">{status}</StatusBadge> */}
        {/* <MyPill>{status}</MyPill> */}
      </article>
      <article className="card__body">
        <div className="card__desc">
          <h1 className="card__desc-label">Description</h1>
          <p className="card__desc-content">{description}</p>
          {/* <p>{comments[0].content}</p> */}
          {/* */}

          {/* {tags?.map((tag) => (
              <TagButton key={tag.id} title={tag.name} />

              // <li key={tag.id} className="card__tag">
              //   {tag.name}
              // </li>
            ))} */}
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
    </section>
  );
};

export default Card;
