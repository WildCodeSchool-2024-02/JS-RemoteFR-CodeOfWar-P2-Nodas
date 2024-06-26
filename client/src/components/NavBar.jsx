import logong from "../assets/images/logong.svg";
import menuburger from "../assets/images/menuburger.svg";

export default function NavBar() {
  return (
    <nav>
      <a href="/burger" className="menu-burger" aria-label="Menu burger">
        <img src={menuburger} alt="Menu burger" />
      </a>
      <img src={logong} alt="Logo" />
      <a href="/cart">
        <img src="#" alt="Logo panier" />
      </a>
    </nav>
  );
}
