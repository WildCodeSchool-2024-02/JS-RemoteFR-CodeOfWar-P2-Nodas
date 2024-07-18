import { Link} from "react-router-dom"
import PropTypes from "prop-types";

export default function GameList ({ games }) {
  
  return (
    <div>
      <h2 className="result-side-title">Jeux trouvés</h2>
      <ul className="result-side-games-list">
        {games.map(game => (
          <li key={game.id} className="game-item">
                 <Link
                style={{
                  backgroundImage: `url(${game.background_image})`,
                  zIndex: 1,
                }}
                to={`/gamepage/${game.id}`}
              >
                {game.name}
              </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

GameList.propTypes = {
    games: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        released: PropTypes.string,
        background_image: PropTypes.string
      })
    ).isRequired
  };