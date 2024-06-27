import PropTypes from "prop-types";
import CategorieItem from "./CategorieItem";

function CategorieList({ List }) {
  return (
    <>
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
};

export default CategorieList;
