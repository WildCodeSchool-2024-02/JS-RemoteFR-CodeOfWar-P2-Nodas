import CarrouselStd from "../components/CarrouselStd";

export default function Accueil() {
  const featuredImages = [
    { id: 1, url: "https://picsum.photos/400/250?random=1"},
    { id: 2, url: "https://picsum.photos/400/250?random=2"},
    { id: 3, url: "https://picsum.photos/400/250?random=3"},
  ];
  const salesImages = [
    { id: 7, url: "https://picsum.photos/400/250?random=7"},
    { id: 8, url: "https://picsum.photos/400/250?random=8"},
    { id: 9, url: "https://picsum.photos/400/250?random=9"},
  ];
  return (
    <div className="landing-page">
      <h1 className="landing-page-title">Welcome to Noda Games</h1>
      <section className="featured-games">
        <h2>Featured games</h2>
        <div className="decobar" />
        <p>
          Featured games, high sales, high rating
        </p>
        <CarrouselStd images={featuredImages} />
      </section>
      <section className="featured-sales">
        <h2>Sales of the moment</h2>
        <div className="decobar" />
        <p>Featured sales with some game cards and reduced prices</p>
        <CarrouselStd images={salesImages} />
      </section>
      <h2>Still hungry for more ?</h2>
      <section className="search-engine">
        <h2>Explore all possibilities in our endless catalog</h2>
        <p>All the games you ever wanted to play are here, all platforms, all genres. Take a look and choose your next adventure !</p>
        <button type="button" id="catalog-button">See all games</button>
      </section>
    </div>
  );
}
