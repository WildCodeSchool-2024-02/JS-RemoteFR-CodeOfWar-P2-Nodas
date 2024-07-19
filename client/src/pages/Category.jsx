import { useLoaderData, useParams } from "react-router-dom";
import CategorieItem from "../components/CategorieItem";

function Categories() {
  const games = useLoaderData();
  const { genres } = useParams();

  return (
    <div className="category-game-list">
      <h1 className="title_category">{genres}</h1>
      <h2 className="title_secondary">New games</h2>
      <section className="category-list">
        {games.slice(0, 3).map((game) => (
          <CategorieItem key={game.id} game={game} />
        ))}
      </section>

      <h2 className="title_secondary">Most popular games</h2>
      <section className="category-list">
        {games.slice(0, 3).map((game) => (
          <CategorieItem key={game.id} game={game} />
        ))}
      </section>

      <h2 className="title_secondary">All {genres} games</h2>
      <section className="category-list">
        {games.map((game) => (
          <CategorieItem key={game.id} game={game} />
        ))}
      </section>
    </div>
  );
}

export default Categories;
