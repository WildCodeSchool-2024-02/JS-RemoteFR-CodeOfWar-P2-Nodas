import PropTypes from "prop-types";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import ShopContext from "../contexts/ShopContext";

export default function BasketItem({ id }) {
  const price = 59.99;
  const [gameInfo, setGameInfo] = useState("");
  const { basket, setBasket } = useContext(ShopContext);
  useEffect(() => {
    axios
      .get(
        `https://api.rawg.io/api/games/${id}?key=${import.meta.env.VITE_API_KEY}`
      )
      .then((response) => setGameInfo(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  const addBasket = () => {
    setBasket((prevBaskets) => {
      const newBaskets = [...prevBaskets];
      if (newBaskets.includes(gameInfo.id)) {
        const index = newBaskets.indexOf(gameInfo.id);
        if (index > -1) {
          newBaskets.splice(index, 1);
        }
      } else {
        newBaskets.push(gameInfo.id);
      }
      return newBaskets;
    });
  };

  return (
    <div className="basket-item">
      <img src={gameInfo.background_image} alt={gameInfo.name} />
      <div className="under-image-basket">
        <h3>{gameInfo.name}</h3>
        <p>Price : {price} €</p>
        <button className="like_button" type="button" onClick={addBasket}>
          <img
            src={
              basket.includes(gameInfo.id)
                ? "../src/assets/images/trash.svg"
                : "../src/assets/images/trash.svg"
            }
            alt="like"
          />
        </button>
      </div>
    </div>
  );
}

BasketItem.propTypes = {
  id: PropTypes.number.isRequired,
};
