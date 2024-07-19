import { useLoaderData, Link } from "react-router-dom";
import CarrouselStd from "../components/CarrouselStd";
import { getShortPopularGames, getShortRandomGames } from "../services/utils";

export default function Accueil() {
  const gamesDetails = useLoaderData();
  const numberOfPopularGames = 5;
  const numberOfRandomGames = 5;

  const featuredGames = getShortPopularGames(
    gamesDetails,
    numberOfPopularGames
  );
  const salesGames = getShortRandomGames(gamesDetails, numberOfRandomGames);

  const featuredImages = featuredGames.map((game) => ({
    id: game.id,
    name: game.name,
    url: game.background_image,
  }));
  const salesImages = salesGames.map((game) => ({
    id: game.id,
    name: game.name,
    url: game.background_image,
  }));

  return (
    <div className="landing-page">
      <h1 className="landing-page-title">Welcome to Noda Games</h1>

      <div className="sections-featured">
        <div className="images-Carrousel">
          <section className="featured-games">
            <h2>Featured games</h2>
            <div className="decobar" />
            <p>Featured games, high sales, high rating</p>
            <CarrouselStd images={featuredImages} />
          </section>
          <section className="featured-sales">
            <h2>Sales of the moment</h2>
            <div className="decobar" />
            <p>Featured sales with some game cards and reduced prices</p>
            <CarrouselStd images={salesImages} />
          </section>
        </div>
      </div>
      <div className="hungry-container">
        <h2 className="hungry">Still hungry for more ?</h2>
        <div className="decobar" />
      </div>
      <section className="search-engine">
        <h2>Explore all possibilities in our endless catalog</h2>
        <p>
          All the games you ever wanted to play are here, all platforms, all
          genres. Take a look and choose your next adventure !
        </p>
        <button type="button" id="catalog-button">
          <Link to="/catalog">See all games</Link>
        </button>
      </section>
    </div>
  );
}
