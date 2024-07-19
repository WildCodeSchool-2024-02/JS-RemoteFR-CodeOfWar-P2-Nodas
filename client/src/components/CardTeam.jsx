import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function CardTeam({ user }) {
  return (
    <div key={user.id} className="cardContainer">
      <img src={user.avatar} alt={`Avatar ${user.name}`} />
      <div className="userDetails">
        <h3 className="team-names">{user.name}</h3>
        <ul className="listUser">
          <li>Age : {user.age} years old</li>
          <li>Description : {user.description}</li>
          <li>
            jeu préféré : <Link to={user.pageUrl}>{user.favoriteGame}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

CardTeam.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    pageUrl: PropTypes.string.isRequired,
    favoriteGame: PropTypes.string.isRequired,
  }).isRequired,
};
