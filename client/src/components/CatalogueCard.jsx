import PropTypes from "prop-types";

export default function CatalogueCard({ gameCard }) {
  return (
    <article className="catalogue_card">
      <img src={gameCard.background_image} alt={gameCard.name} />
      <div>
        <h2>{gameCard.name}</h2>
        <p>je sais pas quoi mettre </p>
      </div>
      <div>
        <p>gratuit</p>
        <button type="button">add baskets</button>
        <button type="button">add favorite</button>
      </div>
    </article>
  );
}

CatalogueCard.propTypes = {
  gameCard: PropTypes.string.isRequired,
};
