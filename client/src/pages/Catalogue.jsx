export default function Catalogue() {
  return (
    <section className="filter_catalogue">
      <h2>Filtrer les jeux par :</h2>
      <button type="button">Réinitiliser les filtres</button>
      <p>CHERCHER UN JEU</p>
      <input type="text" name="Nom du jeu" />
      <div className="label_search">
        <label htmlFor="select-genre">GENRE</label>
        <select name="genre">
          <option value="">--choisir un genre</option>
        </select>

        <label htmlFor="select-genre">PLATFORME</label>
        <select name="platform">
          <option value="">--choisir une platforme</option>
        </select>

        <label htmlFor="select-genre">DEVELOPPERS</label>
        <select name="developpers">
          <option value="">--choisir un developper</option>
        </select>
      </div>
    </section>
  );
}
