import PropTypes from "prop-types";

export default function Gamespages({ genres }) {
  return (
    <ul className="types_of_game">
      {genres.length > 0 ? (
        genres.map((genre) => <li>{genre}</li>)
      ) : (
        <li>Non Catégorisé</li>
      )}
    </ul>
  );
}

Gamespages.propTypes = {
  genres: PropTypes.shape({
    length: PropTypes.number,
    genre: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.shape),
  }).isRequired,
};
