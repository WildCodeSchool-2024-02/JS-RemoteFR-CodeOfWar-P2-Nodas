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
    <>
      <div>
        <h1>BANNER</h1>
      </div>
      <div>
        <h2>Featured games</h2>
        <p>
          Featured games, criteria = high sales, high rating, less than 3 month
        </p>
        <CarrouselStd images={featuredImages} />
      </div>
      <div>
        <h2>Categorie</h2>
        <p>Random categorie with some cards</p>
        <CarrouselStd images={categorieImages} />
      </div>
      <div>
        <h2>Sales of the moment</h2>
        <p>Featured sales with some game cards and reduced prices</p>
        <CarrouselStd images={salesImages} />
      </div>
      <div>
        <h2>Search engine</h2>
        <p>Main search and filter engine with results in pages</p>
        <div>
          <img src="https://picsum.photos/200/130" alt="Game screenshot" />
          <h3>Game name</h3>
          <p>Game details</p>
          <img src="https://picsum.photos/200/130" alt="Game screenshot" />
          <h3>Game name</h3>
          <p>Game details</p>
          <img src="https://picsum.photos/200/130" alt="Game screenshot" />
          <h3>Game name</h3>
          <p>Game details</p>
          <img src="https://picsum.photos/200/130" alt="Game screenshot" />
          <h3>Game name</h3>
          <p>Game details</p>
          <img src="https://picsum.photos/200/130" alt="Game screenshot" />
          <h3>Game name</h3>
          <p>Game details</p>
        </div>
      </div>
    </>
  );
}
