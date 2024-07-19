import { Link, useLoaderData } from "react-router-dom";

export default function Catalogue() {
  const gameInfo = useLoaderData();
  return (
    <>
      <h2 className="search-results-title">Search results</h2>
      <div className="search-result">
        {gameInfo.length > 0
          ? gameInfo.map((iconeGame) => (
              <Link
                key={iconeGame.id}
                style={{
                  backgroundImage: `url(${iconeGame.background_image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  zIndex: 1,
                }}
                to={`/gamepage/${iconeGame.id}`}
              >
                {iconeGame.name}
              </Link>
            ))
          : "aucun jeu à afficher"}
      </div>
    </>
  );
}
