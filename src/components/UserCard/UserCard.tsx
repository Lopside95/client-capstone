import { User } from "../../utils/types/posts";
import "./UserCard.scss";
import StatusBadge from "../ui/StatusBadge/StatusBadge";

const UserCard = ({ user }: { user: User }) => {
  const { firstName, lastName, email, password, active }: User = user;

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
