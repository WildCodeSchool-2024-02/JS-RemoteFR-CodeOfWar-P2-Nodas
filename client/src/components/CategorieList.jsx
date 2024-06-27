import PropTypes from "prop-types";
import CategorieItem from "./CategorieItem";

function CategorieList({ Games, genre }) {
  return (
    <>
      <section>
        <h1>
          <li>{genre}</li>
        </h1>
        <h2>Nouvelles sorties</h2>
        {Games.slice(0, 3).map((InfoGames, index) => (
          <CategorieItem
            key={[index]}
            gamesImage={InfoGames.background_image}
            gamesName={InfoGames.name}
          />
        ))}
      </section>
      <section>
        <h2>Les plus populaires</h2>
        {Games.slice(0, 3).map((InfoGames, index) => (
          <CategorieItem
            key={[index]}
            gamesImage={InfoGames.background_image}
            gamesName={InfoGames.name}
          />
        ))}
      </section>
      <section>
        <h2>Tous les jeux {genre}</h2>
        {Games.map((InfoGames, index) => (
          <CategorieItem
            key={[index]}
            gamesImage={InfoGames.background_image}
            gamesName={InfoGames.name}
          />
        ))}
      </section>
    </>
  );
}

CategorieList.propTypes = {
  Games: PropTypes.shape({
    map: PropTypes.string,
    slice: PropTypes.string,
  }).isRequired,
  genre: PropTypes.string.isRequired,
};

export default CategorieList;
