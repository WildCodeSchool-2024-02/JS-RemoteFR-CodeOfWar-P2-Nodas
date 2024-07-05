import PropTypes from "prop-types";

export default function FavorisItem({
  gamesImage,
  gamesName,
  redlike,
  paniericon,
}) {
  return (
    gamesName && (
      <div className="FavorisItem">
        <img src={gamesImage} alt={gamesName} />
        <ul>
          <li>
            <b>{gamesName}</b>
          </li>
          <div className="Coeur-Prix">
            <li>
              <img src={redlike} alt="heart" />
            </li>
            <li>
              <img src={paniericon} alt="Logo panier" className="paniericon" />
            </li>
            <li className="Prix">59,99€</li>
          </div>
        </ul>
      </div>
    )
  );
}

FavorisItem.propTypes = {
  gamesImage: PropTypes.string.isRequired,
  gamesName: PropTypes.string.isRequired,
  paniericon: PropTypes.string.isRequired,
  redlike: PropTypes.string.isRequired,
};
