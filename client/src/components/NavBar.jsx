import { useState, useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import SearchDialog from "./SearchDialog";
import ShopContext from "../contexts/ShopContext";
import logong from "../assets/images/logoNG.svg";
import menuburger from "../assets/images/menuburger.svg";
import paniericon from "../assets/images/paniericon.svg";
import searchicon from "../assets/images/searchicon.svg";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current.showModal();
  };

  const closeModal = () => {
    modalRef.current.close();
  };

  const { basket } = useContext(ShopContext);
  const itemCount = basket.length;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (
      !event.target.closest(".menu-dropdown") &&
      !event.target.closest(".menu-burger")
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="Navbar">
        <Link to="/">
          <img src={logong} alt="Logo" />
        </Link>
        <div className="iconsGroup">
          <SearchDialog tools={{ closeModal, modalRef }} />
          <button type="button" onClick={openModal} className="search-button">
            <img src={searchicon} alt="Logo recherche" />
          </button>
          <Link to="/basket">
            <img src={paniericon} alt="Logo panier" />
          </Link>
          {itemCount > 0 ? (
            <span className="basket-item-count">{itemCount}</span>
          ) : (
            ""
          )}

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
          <Link to="/basket" onClick={toggleMenu}>
            Panier
          </Link>
          <Link to="/categories" onClick={toggleMenu}>
            Categories
          </Link>
          <Link to="/favoris" onClick={toggleMenu}>
            Liste de souhaits
          </Link>
          <Link to="/about" onClick={toggleMenu}>
            About
          </Link>
        </div>
      )}
    </>
  );
}
