import PropTypes from "prop-types";

function TestImages({ tata }) {
  return (
    tata && (
      <div className="TestImages">
        <img src={tata.background_image} alt="toto" />
        <ul>
          <li>nom du jeu : {tata.name}</li>
          <li>prix : TROP CHER POUR TOI - pas de prix dans l'api</li>
          <li>date de parution :</li>
          <li>meta score : 999</li>
          <li>description :</li>
          <li>Langues :</li>
          <li>Developpeurs</li>
          <li>PEGI : 18</li>
          <li>bouton favoris / panier</li>
        </ul>
      </div>
    )
  );
}

export default TestImages;

TestImages.propTypes = {
  tata: PropTypes.shape({
    name: PropTypes.string,
    background_image: PropTypes.string,
  }).isRequired,
};
