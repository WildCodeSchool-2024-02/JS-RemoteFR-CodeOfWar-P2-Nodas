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

Gamespages.propTypes = {
  gameInfo: PropTypes.shape({
    description_raw: PropTypes.string,
  }).isRequired,
  paragraphLong: PropTypes.bool.isRequired,
  handleMouseOut: PropTypes.func.isRequired,
  handleMouseOver: PropTypes.func.isRequired,
};
