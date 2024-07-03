import { useState } from "react";
import { Link } from "react-router-dom";
import logong from "../assets/images/logoNG.svg";
import menuburger from "../assets/images/menuburger.svg";
import paniericon from "../assets/images/paniericon.svg";
import searchicon from "../assets/images/searchicon.svg";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
          <button
            type="button"
            onClick={toggleMenu}
            className="menu-burger"
            aria-label="Menu burger"
          >
            <img src={menuburger} alt="Menu burger" />
          </button>
        </div>
      </nav>
      <div className="animated-border" />
      {menuOpen && (
        <div className="menu-dropdown">
          <Link to="/" onClick={toggleMenu}>
            Accueil
          </Link>
          <Link to="/panier" onClick={toggleMenu}>
            Panier
          </Link>
          <Link to="/catalogue" onClick={toggleMenu}>
            Catalogue
          </Link>
          <Link to="/categories" onClick={toggleMenu}>
            Categories
          </Link>
          <Link to="/favoris" onClick={toggleMenu}>
            Favoris
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
        </div>
      )}
    </>
  );
}
