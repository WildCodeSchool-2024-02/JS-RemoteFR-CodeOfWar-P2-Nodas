import { useLoaderData, Link } from "react-router-dom";
import CarrouselStd from "../components/CarrouselStd";
import getPopularGames from "../services/utils";
import getRandomGames from "../services/utils2";

export default function Accueil() {
  const gamesDetails = useLoaderData();
  const numberOfPopularGames = 5;
  const numberOfGetRandomGames = 5;

  const featuredGames = getPopularGames(gamesDetails, numberOfPopularGames);
  const salesGames = getRandomGames(gamesDetails, numberOfGetRandomGames);

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
      <h2>Still hungry for more ?</h2>
      <div className="decobar" />
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
