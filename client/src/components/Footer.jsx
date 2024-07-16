import { Link, useNavigate } from "react-router-dom";
import previous from "../assets/images/previous.png";
import home from "../assets/images/home.png";
import favorite from "../assets/images/favorite.png";

export default function Footer() {
  const navigate = useNavigate();
  const historyBack = () => {
    navigate(-1);
  };
  return (
    <footer className="Footer">
      <button onClick={historyBack} type="button">
        <img src={previous} alt="Previous" />
      </button>
      <Link className="iconHome" to="/">
        <img src={home} alt="Home" />
      </Link>
      <Link className="iconFavorite" to="/favoris">
        <img src={favorite} alt="Favorite" />
      </Link>
    </footer>
  );
}
