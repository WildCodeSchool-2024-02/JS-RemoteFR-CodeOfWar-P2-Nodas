import PropTypes from "prop-types";

export default function Gamespages({
  gameInfo,
  paragraphLong,
  handleMouseOut,
  handleMouseOver,
  handleFocus,
  handleBlur,
}) {
  let displayshortText;

  if (gameInfo.description_raw) {
    displayshortText = !paragraphLong
      ? `${gameInfo.description_raw.slice(0, 100)}...`
      : gameInfo.description_raw;
  } else {
    displayshortText = "Description Non disponible";
  }

  return (
    <div
      className="short"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={0}
    >
      <p>{displayshortText}</p>
    </div>
  );
}

Gamespages.propTypes = {
  gameInfo: PropTypes.shape({
    description_raw: PropTypes.string.isRequired,
  }).isRequired,
  paragraphLong: PropTypes.bool.isRequired,
  handleMouseOut: PropTypes.func.isRequired,
  handleMouseOver: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
};
