import { useLoaderData, useParams } from "react-router-dom";
import CategorieItem from "../components/CategorieItem";

function Categories() {
  const Games = useLoaderData();
  const { genres } = useParams();

  return (
    <>
      <section>
        <h1>{genres}</h1>
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
        <h2>Tous les jeux {genres}</h2>
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
