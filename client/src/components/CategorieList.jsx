import PropTypes from "prop-types";
import CategorieItem from "./CategorieItem";

function CategorieList({ List, genre }) {
  return (
    <>
      <h1>{genre}</h1>
      {List.map((InfoGames, index) => (
        <CategorieItem
          key={[index]}
          gamesImage={InfoGames.background_image}
          gamesName={InfoGames.name}
        />
      ))}
    </>
  );
}

CategorieList.propTypes = {
  List: PropTypes.shape({
    map: PropTypes.string,
  }).isRequired,
  genre: PropTypes.string.isRequired,
};

export default CategorieList;
