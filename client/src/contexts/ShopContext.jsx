/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const ShopContext = createContext();

const getInitialState = () => {
  const basket = localStorage.getItem("basket");
  return basket ? JSON.parse(basket) : [];
};

export function ShopProvider({ children }) {
  const [basket, setBasket] = useState(getInitialState);
  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);
  return (
    <ShopContext.Provider value={{ basket, setBasket }}>
      {children}
    </ShopContext.Provider>
  );
}

export default ShopContext;

ShopProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};
