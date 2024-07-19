import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

export default function CategorieItem({ game }) {
  const navigate = useNavigate();

  return (
    <div
      className="CategorieItem"
      onClick={() => {
        navigate(`/gamepage/${game.id}`);
      }}
      aria-hidden="true"
    >
      <img src={game.background_image} alt={game.name} />
      <ul className="gamename_prix">
        <li>
          <h3>{game.name}</h3>
        </li>
        <li className="Prix">59,99€</li>
      </ul>
    </div>
  );
}

CategorieItem.propTypes = {
  game: PropTypes.string.isRequired,
  background_image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
