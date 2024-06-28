import CarrouselStd from "../components/CarrouselStd";

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
        <div className="decobar" />
        <p>
          Featured games, high sales, high rating
        </p>
        <CarrouselStd images={featuredImages} />
      </section>
      <section className="featured-categorie">
        <h2>Category</h2>
        <div className="decobar" />
        <p>Random category with some cards</p>
        <CarrouselStd images={categorieImages} />
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
      </main>
      <footer className="footer">
        <h2>FOOTER</h2>
      </footer>
    </div>
  );
}
