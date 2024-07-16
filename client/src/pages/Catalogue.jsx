import { useLoaderData } from "react-router-dom";
import CatalogueCard from "../components/CatalogueCard";

export default function Catalogue() {
  const filtersData = useLoaderData();

  return (
    <div className="container_catalogue">
      <section className="filter_catalogue">
        <h2>Filtrer les jeux par :</h2>
        <button className="reinitialisation" type="button">
          Réinitiliser les filtres
        </button>
        <p>CHERCHER UN JEU</p>
        <input type="text" name="Nom du jeu" />
        <div className="label_search">
          <label className="liste_label" htmlFor="select-genre">
            GENRES
          </label>
          <select name="genre">
            <option value="">--choisir un genre</option>
            {filtersData[1].map((genre) => (
              <option key={genre.id}>{genre.name}</option>
            ))}
          </select>

          <label className="liste_label" htmlFor="select-platfome">
            PLATEFORMES
          </label>
          <select name="platform">
            <option value="">--choisir une platforme</option>
            {filtersData[0].map((platform) => (
              <option key={platform.id}>{platform.name}</option>
            ))}
          </select>

          <label className="liste_label" htmlFor="select-store">
            STORES
          </label>
          <select name="stores">
            <option value="">--choisir un store</option>
            {filtersData[2].map((store) => (
              <option key={store.id}>{store.name}</option>
            ))}
          </select>
        </div>
      </section>
      <section>
        <h2>jeu à afficher</h2>
        {filtersData[3].map((gameCard) => (
          <CatalogueCard key={gameCard.id} gameCard={gameCard} />

        ))}
        
      </section>
    </div>
  );
}
