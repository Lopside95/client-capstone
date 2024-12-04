// import { Pill } from "evergreen-ui";
import MyPill from "../ui/Pill/MyPill";
import { Post, User } from "../../utils/types/posts";
import TagButton from "../ui/Tag/TagButton";
import "./UserCard.scss";
import StatusBadge from "../ui/StatusBadge/StatusBadge";

const UserCard = ({ user }: { user: User }) => {
  const { firstName, lastName, email, password, active }: User = user;

  console.log("first namer", firstName);

  return (
    <section className="card">
      <article className="card__heading">
        <h1 className="card__title">
          {firstName}
          {lastName}
        </h1>
        <h2>{email}</h2>
        <StatusBadge color="blue">{active}</StatusBadge>
      </article>
    </section>
  );
};

export default UserCard;
