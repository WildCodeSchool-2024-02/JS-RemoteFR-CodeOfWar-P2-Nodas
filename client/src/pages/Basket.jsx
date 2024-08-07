import { useContext } from "react";
import ShopContext from "../contexts/ShopContext";
import BasketItem from "../components/BasketItem";

export default function Basket() {
  const { basket } = useContext(ShopContext);
  const prices = [];

  for (let i = 0; i < basket.length; i += 1) {
    prices.push(Number(localStorage.getItem(basket[i])));
  }

  const totalPrice = prices.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return (
    <section className="basket">
      <h2>Panier</h2>
      {basket.map((id) => (
        <BasketItem key={id} id={id} />
      ))}
      <p>Total price : {totalPrice} €</p>
    </section>
  );
}
