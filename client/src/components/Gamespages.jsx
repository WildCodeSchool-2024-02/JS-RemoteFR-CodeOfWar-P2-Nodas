export default function Gamespages({
  gameInfo,
  paragraphLong,
  handleMouseOut,
  handleMouseOver,
}) {
  return (
    <p
      className={paragraphLong ? "long" : "short"}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {gameInfo.description_raw}
    </p>
  );
}
