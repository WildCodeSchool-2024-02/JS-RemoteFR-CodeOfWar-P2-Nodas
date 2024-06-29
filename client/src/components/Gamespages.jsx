export default function Gamespages({ gameInfo, genres }) {
  return (
    <ul className="types_of_game">
      {genres.length > 0 ? (
        genres.map((genre, index) => <li key={index}>{genre}</li>)
      ) : (
        <li>Non Catégorisé</li>
      )}
      <li>Action</li>
    </ul>
  );
}
