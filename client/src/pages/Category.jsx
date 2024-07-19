import { useLoaderData, useParams } from "react-router-dom";
import CategorieItem from "../components/CategorieItem";

function Categories() {
  const games = useLoaderData();
  const { genres } = useParams();

  return (
    <>
      <section>
        <h1 className="title_category">{genres}</h1>
        <h2 className="title_secondary">Nouvelles sorties</h2>

        {games.slice(0, 3).map((game) => (
          <CategorieItem key={game.id} game={game} />
        ))}
      </section>

      <section>
        <h2 className="title_secondary">Les plus populaires</h2>
        {games.slice(0, 3).map((game) => (
          <CategorieItem key={game.id} game={game} />
        ))}
      </section>
      <section>
        <h2 className="title_secondary">Tous les jeux {genres}</h2>
        {games.map((game) => (
          <CategorieItem key={game.id} game={game} />
        ))}
      </section>
    </>
  );
}

export default Categories;
