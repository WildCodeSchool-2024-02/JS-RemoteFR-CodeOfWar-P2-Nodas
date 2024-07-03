import { useLoaderData } from "react-router-dom";
import CategorieItem from "../components/CategorieItem";

function Categories() {
  const Games = useLoaderData();
  const genre = "action";

  return (
    <>
      <section>
        <h1>{genre}</h1>
        <h2>Nouvelles sorties</h2>
        {Games.slice(0, 3).map((InfoGames, index) => (
          <CategorieItem
            key={[index]}
            gamesImage={InfoGames.background_image}
            gamesName={InfoGames.name}
          />
        ))}
      </section>
      <section>
        <h2>Les plus populaires</h2>
        {Games.slice(0, 3).map((InfoGames, index) => (
          <CategorieItem
            key={[index]}
            gamesImage={InfoGames.background_image}
            gamesName={InfoGames.name}
          />
        ))}
      </section>
      <section>
        <h2>Tous les jeux {genre}</h2>
        {Games.map((InfoGames, index) => (
          <CategorieItem
            key={[index]}
            gamesImage={InfoGames.background_image}
            gamesName={InfoGames.name}
          />
        ))}
      </section>
    </>
  );
}

export default Categories;
