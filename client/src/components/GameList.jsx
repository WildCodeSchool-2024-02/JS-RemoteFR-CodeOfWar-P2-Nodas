import PropTypes from "prop-types";

export default function GameList ({ games }) {
  return (
    <div>
      <h2 className="result-side-title">Jeux trouvés</h2>
      <ul className="result-side-games-list">
        {games.map(game => (
          <li key={game.id} className="game-item">
            <img src={game.background_image} alt={game.name}/>
            <h3>{game.name}</h3>
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