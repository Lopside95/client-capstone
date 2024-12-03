import { Pane } from "evergreen-ui";
import { Post } from "../../utils/types/posts";
import Button from "../ui/Button/Button";

const PostCard = (post: Post) => {
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
    <Pane
      className="main"
      // height={50}
      // width={50}
      display="flex"
      alignItems="center"
      justifyContent="center"
      border="default"
    >
      <h1 className="card__title">{title}</h1>
      {/* <img className="card__img" src={img} /> */}
      <p>{description}</p>
      <ul className="card__tags">
        {tags?.map((tag) => (
          <Button>{tag.name}</Button>
          // <TagButton key={tag.id} title={tag.name} />

          // <li key={tag.id} className="card__tag">
          //   {tag.name}
          // </li>
        ))}
      </ul>
    </Pane>
  );
};

export default PostCard;
