import { createContext, useState } from "react";
import PropTypes from "prop-types";

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
  const [favoris, setFavoris] = useState([]);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <FavoriteContext.Provider value={{ favoris, setFavoris }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export default FavoriteContext;

FavoriteProvider.propTypes = {
    children: PropTypes.shape().isRequired,
  };