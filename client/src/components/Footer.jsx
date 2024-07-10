import { Link } from "react-router-dom";
import previous from "../assets/images/previous.png";
import home from "../assets/images/home.png";
import favorite from "../assets/images/favorite.png";

export default function Footer() {
  return (
    <footer className="Footer">
      <section className="iconsFoot">
        <Link className="iconPrevious" to="/">
          <img src={previous} alt="Previous" />
        </Link>

        <Link className="iconHome" to="/">
          <img src={home} alt="Home" />
        </Link>

        <Link className="iconFavorite" to="/favoris">
          <img src={favorite} alt="Favorite" />
        </Link>
      </section>
    </footer>
  );
}
