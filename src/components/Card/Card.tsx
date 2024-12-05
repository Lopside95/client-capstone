// import { Pill } from "evergreen-ui";
import MyPill from "../ui/Pill/MyPill";
import { CardInterface, Post } from "../../utils/types/posts";
import TagButton from "../ui/Tag/TagButton";
import "./Card.scss";
import StatusBadge from "../ui/StatusBadge/StatusBadge";
import { useNavigate } from "react-router";

const Card = (post: Post) => {
  const navigate = useNavigate();

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
    <section className="card" onClick={() => navigate(`/posts/${id}`)}>
      <article className="card__heading">
        <h1 className="card__title">{title}</h1>
        <MyPill color="red">{urgency}</MyPill>
        <StatusBadge color="blue">{status}</StatusBadge>
        {/* <MyPill>{status}</MyPill> */}
      </article>
      <img className="card__img" src={img} />
      <p>{description}</p>
      {/* <p>{comments[0].content}</p> */}
      <ul className="card__tags">
        {tags?.map((tag) => (
          <TagButton key={tag.id} title={tag.name} />

          // <li key={tag.id} className="card__tag">
          //   {tag.name}
          // </li>
        ))}
      </ul>
    </section>
  );
};

export default Card;
