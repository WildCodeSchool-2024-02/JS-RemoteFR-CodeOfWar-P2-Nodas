import logong from "../assets/images/logoNG.svg";
import menuburger from "../assets/images/menuburger.svg";
import paniericon from "../assets/images/paniericon.svg";
import searchicon from "../assets/images/searchicon.svg";

export default function NavBar() {
  return (
    <>
      <nav className="Navbar">
        <img src={logong} alt="Logo" />
        <div className="iconsGroup">
          <a href="/search">
            <img src={searchicon} alt="Logo recherche" />
          </a>
          <a href="/cart">
            <img src={paniericon} alt="Logo panier" />
          </a>
          <a href="/burger" className="menu-burger" aria-label="Menu burger">
            <img src={menuburger} alt="Menu burger" />
          </a>
        </div>
      </nav>
      <div className="animated-border" />
    </>
  );
}
