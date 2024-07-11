import { useLoaderData } from "react-router-dom";

export default function Catalogue() {
  const platforms = useLoaderData();
  console.info(platforms)
  return (
    <div className="container_catalogue">
      <section className="filter_catalogue">
        <h2>Filtrer les jeux par :</h2>
        <button className="reinitialisation"type="button">Réinitiliser les filtres</button>
        <p>CHERCHER UN JEU</p>
        <input type="text" name="Nom du jeu" />
        <div className="label_search">
          <label className="liste_label" htmlFor="select-genre">
            GENRE
          </label>
          <select name="genre">
            <option value="">--choisir un genre</option>
          </select>

          <label className="liste_label" htmlFor="select-platfome">
            PLATFORME
          </label>
          <select name="platform">
            <option value="">--choisir une platforme</option>
            {platforms.map((platform) => 
            <option key={platform.id}>{platform.name}</option> )}
          </select>

          <label className="liste_label" htmlFor="select-developpers">
            DEVELOPPERS
          </label>
          <select name="developpers">
            <option value="">--choisir un developper</option>
          </select>
        </div>
      </section>
      <section>
        <h2>jeu à afficher</h2>
      </section>
    </div>
  );
}
