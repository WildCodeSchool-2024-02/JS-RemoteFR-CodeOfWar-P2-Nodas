import PropTypes from "prop-types";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import FavoriteContext from "../contexts/FavoriteContext";

export default function FavorisItem({ id }) {
  const [gameInfo, setGameInfo] = useState("");
  const { favoris, setFavoris } = useContext(FavoriteContext);

  useEffect(() => {
    axios
      .get(
        `https://api.rawg.io/api/games/${id}?key=${import.meta.env.VITE_API_KEY}`
      )
      .then((response) => setGameInfo(response.data))
      .catch((error) => console.error(error));
  }, [id]);
  const addFavorite = () => {
    setFavoris((prevFavorites) => {
      const newFavorites = [...prevFavorites];
      if (newFavorites.includes(gameInfo.id)) {
        const index = newFavorites.indexOf(gameInfo.id);
        if (index > -1) {
          newFavorites.splice(index, 1);
        }
      } else {
        newFavorites.push(gameInfo.id);
      }
      return newFavorites;
    });
  };

  return (
    <div className="FavorisItem">
      <img src={gameInfo.background_image} alt={gameInfo.name} />
      <div className="under-image-fav">
      <h3>{gameInfo.name}</h3>
      <button className="like_button" type="button" onClick={addFavorite}>
        <img
          src={
            favoris.includes(gameInfo.id)
              ? "../src/assets/images/like-filled.svg"
              : "../src/assets/images/like.svg"
          }
          alt="like"
        />
      </button>
      </div>
    </div>
  );
}

FavorisItem.propTypes = {
  id: PropTypes.number.isRequired,
};
