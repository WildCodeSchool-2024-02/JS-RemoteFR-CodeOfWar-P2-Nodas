import PropTypes from "prop-types";

export default function GameList ({ games }) {
  return (
    <div>
      <h2>Jeux trouvés</h2>
      <ul>
        {games.map(game => (
          <li key={game.id}>
            <h3>{game.name}</h3>
            <p>{game.released}</p>
            <img src={game.background_image} alt={game.name} width="200" />
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