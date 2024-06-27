import PropTypes from "prop-types";

export default function CategorieItem({ gamesImage, gamesName }) {
  return (
    gamesName && (
      <div className="CategorieItem">
        <img src={gamesImage} alt={gamesName} />
        <ul>
          <li>{gamesName}</li>
          <li>price €€€</li>
        </ul>
      </div>
    )
  );
}

CategorieItem.propTypes = {
  gamesImage: PropTypes.string.isRequired,
  gamesName: PropTypes.string.isRequired,
};
