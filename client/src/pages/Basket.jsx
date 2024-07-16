import { useContext } from "react";
import ShopContext from "../contexts/ShopContext";
import BasketItem from "../components/BasketItem";

export default function Basket() {
  const { basket } = useContext(ShopContext);

  return (
    <section className="basket">
      <h2>Panier</h2>
      {basket.map((id) => (
        <BasketItem key={id} id={id} />
      ))}
    </section>
  );
}
