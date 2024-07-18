import { Link } from "react-router-dom";
import { useContext } from "react";
import FavorisItem from "../components/FavorisItem";
import FavoriteContext from "../contexts/FavoriteContext";

function Favoris() {
  const { favoris } = useContext(FavoriteContext);

  return (
    <div className="wishpage">
      <h2 className="wishlist-title second_title">Liste de souhaits</h2>
      <section className="wishlist">
        {favoris.map((id, index) => (
          <FavorisItem key={[index]} id={id} />
        ))}
        {favoris.length > 0 ? (
          ""
        ) : (
          <p className="no-fav-msg">
            Vous n'avez aucun jeu dans votre liste de souhaits.
          </p>
        )}
      </section>
      <Link to="/categories">Continuer vers les categories...</Link>
    </div>
  );
}

export default Favoris;
