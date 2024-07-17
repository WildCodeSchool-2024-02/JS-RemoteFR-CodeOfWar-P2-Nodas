import { Link, useLoaderData } from "react-router-dom";

export default function Catalogue() {
  const gameInfo = useLoaderData();
  console.info(gameInfo);
  return (
    <div className="search-result">
      <h3 className="search-game-title">{gameInfo.name}</h3>
      {gameInfo.length > 0
        ? gameInfo.map((iconeGame) => (
            <Link
              key={iconeGame.id}
              style={{
                backgroundImage: `url(${iconeGame.background_image})`,
                width: "100%",
              }}
              to={`/gamepage/${gameInfo.id}`}
            >
              {iconeGame.name}
            </Link>
          ))
        : "aucun jeu à afficher"}
    </div>
  );
}
