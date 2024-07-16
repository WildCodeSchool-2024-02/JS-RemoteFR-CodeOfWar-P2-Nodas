import { useLoaderData, useParams } from "react-router-dom";
import CategorieItem from "../components/CategorieItem";

function Categories() {
  const games = useLoaderData();
  const { genres } = useParams();

  return (
    <>
      <section>
        <h1>{genres}</h1>
        <h2>Nouvelles sorties</h2>

        {games.slice(0, 3).map((game) => (
          <CategorieItem key={game.id} game={game} />
        ))}
      </section>

      <section>
        <h2>Les plus populaires</h2>
        {games.slice(0, 3).map((game) => (
          <CategorieItem key={game.id} game={game} />
        ))}
      </section>
      <section>
        <h2>Tous les jeux {genres}</h2>
        {games.map((game) => (
          <CategorieItem key={game.id} game={game} />
        ))}
      </section>
    </>
  );
}

export default Categories;
