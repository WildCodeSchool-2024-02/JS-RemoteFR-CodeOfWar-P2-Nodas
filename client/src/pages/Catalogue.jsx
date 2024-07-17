import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Catalogue({ gameInfo, tools }) {
  return (
    <div className="search-result">
      <h3 className="search-game-title">{gameInfo.name}</h3>
      <img
        src={gameInfo.background_image}
        alt={gameInfo.name}
        style={{ width: "100%" }}
      />
      <Link to={`/gamepage/${gameInfo.name}`} onClick={tools.closeModal}>
        Aller à la page du jeu
      </Link>
    </div>
  );
}

Catalogue.propTypes = {
  gameInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    background_image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  tools: PropTypes.shape({
    closeModal: PropTypes.func.isRequired,
  }).isRequired,
};
