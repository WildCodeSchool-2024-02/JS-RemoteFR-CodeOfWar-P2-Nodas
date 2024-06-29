export default function Gamespages({ gameInfo, platforms }) {
  return (
    <ul>
      {platforms.length > 0 ? (
        platforms.map((platform, index) => <li key={index}>{platform}</li>)
      ) : (
        <li>Non Catégorisé</li>
      )}
      <li>Xbox</li>
    </ul>
  );
}
