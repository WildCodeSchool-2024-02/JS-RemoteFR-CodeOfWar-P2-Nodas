import { useLoaderData } from "react-router-dom";
import FavorisItem from "../components/FavorisItem";
import redlike from "../assets/images/redlike.svg";
import paniericon from "../assets/images/paniericon.svg";

function Favoris() {
  const Games = useLoaderData();
  console.info(Games);
  return (
    <>
    <h2>coucou</h2>
      <section>
        <h2>Favoris</h2>
        {Games.slice(0, 3).map((InfoGames, index) => (
          <FavorisItem
            key={[index]}
            gamesImage={InfoGames.background_image}
            gamesName={InfoGames.name}
            redlike={redlike}
            paniericon={paniericon}
          />
        ))}
      </section>
    </>
  );
}

export default Favoris;
