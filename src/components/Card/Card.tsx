import { Post } from "../../utils/types/posts";
import TagButton from "../ui/Tag/TagButton";
import "./Card.scss";

const Card = (post: Post) => {
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
  }: Post = post;

  return (
    <section className="card">
      <h1 className="card__title">{title}</h1>
      <img className="card__img" src={img} />
      <p>{description}</p>
      <ul className="card__tags">
        {tags?.map((tag) => (
          <TagButton title={tag.name} />

          // <li key={tag.id} className="card__tag">
          //   {tag.name}
          // </li>
        ))}
      </ul>
    </section>
  );
};

export default Card;
