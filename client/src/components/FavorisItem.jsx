import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios";

export default function FavorisItem({ id }) {
  console.info(id);
  const [gameInfo, setGameInfo] = useState("");
  useEffect(() => {
      axios
        .get(
          `https://api.rawg.io/api/games/${id}?key=${import.meta.env.VITE_API_KEY}`
        )
        .then((response) => setGameInfo(response.data))
        .catch((error) => console.error(error));
  }, [id]);

  console.info(gameInfo);
  return (
    <div className="FavorisItem">
      <img src={gameInfo.background_image} alt={gameInfo.name} />
        <ul>
          <li>
            <b>{gameInfo.name}</b>
          </li>
          <div className="Coeur-Prix">
            <li className="Prix">59,99€</li>
          </div>
        </ul>
    </div>
  );
}

FavorisItem.propTypes = {
  id: PropTypes.number.isRequired,
};
