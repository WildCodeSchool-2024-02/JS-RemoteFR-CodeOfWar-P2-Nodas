import CarrouselStd from "../components/CarrouselStd";
import GameCardAccueil from "../components/GameCardAccueil"

export default function Accueil() {
  const featuredImages = [
    { id: 1, url: "https://picsum.photos/400/250?random=1"},
    { id: 2, url: "https://picsum.photos/400/250?random=2"},
    { id: 3, url: "https://picsum.photos/400/250?random=3"},
  ];
  const categorieImages = [
    { id: 4, url: "https://picsum.photos/400/250?random=4"},
    { id: 5, url: "https://picsum.photos/400/250?random=5"},
    { id: 6, url: "https://picsum.photos/400/250?random=6"},
  ];
  const salesImages = [
    { id: 7, url: "https://picsum.photos/400/250?random=7"},
    { id: 8, url: "https://picsum.photos/400/250?random=8"},
    { id: 9, url: "https://picsum.photos/400/250?random=9"},
  ];
  return (
    <div className="landing-page">
    <header>
      <div>
        <h1>BANNER</h1>
      </div>
      </header>
      <main>
      <section className="featured-games">
        <h2>Featured games</h2>
        <p>
          Featured games, criteria = high sales, high rating, less than 3 month
        </p>
        <CarrouselStd images={featuredImages} />
      </section>
      <section className="featured-categorie">
        <h2>Categorie</h2>
        <p>Random categorie with some cards</p>
        <CarrouselStd images={categorieImages} />
      </section>
      <section className="featured-sales">
        <h2>Sales of the moment</h2>
        <p>Featured sales with some game cards and reduced prices</p>
        <CarrouselStd images={salesImages} />
      </section>
      <section className="search-engine">
        <h2>Search engine</h2>
        <p>Main search and filter engine with results in pages</p>
        <div>
          <GameCardAccueil />
        </div>
      </section>
      </main>
    </div>
  );
}
