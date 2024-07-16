import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import FavoriteContext from "../contexts/FavoriteContext";

export default function GamePage() {
  const gameInfo = useLoaderData();
  const gameGenres = gameInfo.genres;
  const gamePlatforms = gameInfo.platforms;
  const gamePublishers = gameInfo.publishers;
  const gameDevelopers = gameInfo.developers;

  const { favoris, setFavoris } = useContext(FavoriteContext);
  const [longDescription, setLOngDescription] = useState(false);
  let displayShortDescription;

  if (gameInfo.description_raw) {
    displayShortDescription = !longDescription ? (
      <p className="shortDescription">{gameInfo.description_raw}</p>
    ) : (
      <p className="longDescription">{gameInfo.description_raw}</p>
    );
  } else {
    displayShortDescription = "Description unavailable";
  }

  const handleDescription = () => {
    setLOngDescription(!longDescription);
  };

  const addFavorite = () => {
    setFavoris((prevFavorites) => {
      const newFavorites = [...prevFavorites];
      if (newFavorites.includes(gameInfo.id)) {
        const index = newFavorites.indexOf(gameInfo.id);
        if (index > -1) {
          newFavorites.splice(index, 1);
        }
      } else {
        newFavorites.push(gameInfo.id);
      }
      return newFavorites;
    });
  };

  return (
    <div className="game-details">
      <img
        className="image_game"
        src={gameInfo.background_image}
        alt="nom du jeu"
      />
      <section className="title_metascore">
        <div className="title_game">
          <h2>{gameInfo.name}</h2>
          <hr />
        </div>
        <div className="metacritique">
          <p>{gameInfo.metacritic}</p>
        </div>
      </section>
      <ul className="types_of_game">
        {gameGenres.length > 0 ? (
          gameGenres.map((genre) => <li key={genre.id}>{genre.name}</li>)
        ) : (
          <li>Divers</li>
        )}
      </ul>
      <section className="description_game complet">
        <h3 className="title_gamepage">
          Description<span>:</span>
        </h3>
        {displayShortDescription}
        <button type="button" className="readMore" onClick={handleDescription}>
          {longDescription ? "Read Less" : "Read More"}
        </button>
      </section>
      <section className="platform_game">
        <h3 className="title_gamepage">
          Plateformes<span>:</span>
        </h3>
        <ul className="types_of_platform">
          {gamePlatforms.length > 0 &&
            gamePlatforms.map((platform) => {
              let platformClass = "divers";

              if (
                platform.platform.name.toLowerCase().includes("playstation")
              ) {
                platformClass = "playstation";
              } else if (
                platform.platform.name.toLowerCase().includes("xbox")
              ) {
                platformClass = "xbox";
              } else if (
                platform.platform.name.toLowerCase().includes("nintendo")
              ) {
                platformClass = "nintendo";
              }

              return (
                <li key={platform.platform.id} className={platformClass}>
                  {platform.platform.name}
                </li>
              );
            })}
        </ul>
      </section>
      <section className="developers_publishers">
        <div className="developers">
          <h3 className="title_gamepage">
            Publishers<span>:</span>
          </h3>
          <ul>
            {gamePublishers.length > 0 ? (
              gamePublishers.map((publisher) => (
                <li key={publisher.id} className="publisher">
                  {publisher.name}
                </li>
              ))
            ) : (
              <li>Unknown Publisher</li>
            )}
          </ul>
        </div>
        <div className="publishers">
          <h3 className="title_gamepage">
            Developers<span>:</span>
          </h3>
          <ul>
            {gameDevelopers.length > 0 ? (
              gameDevelopers.map((developer) => (
                <li key={developer.id} className="developers">
                  {developer.name}
                </li>
              ))
            ) : (
              <li>Unknown Developer</li>
            )}
          </ul>
        </div>
      </section>
      <section className="like_added">
        <button className="like_button" type="button" onClick={addFavorite}>
          <img
            src={
              favoris.includes(gameInfo.id)
                ? "../src/assets/images/like-filled.svg"
                : "../src/assets/images/like.svg"
            }
            alt="like"
          />
        </button>
        <button className="added_button" type="button">
          <img src="../src/assets/images/loggoCaddie.png" alt="caddie" />
          <p>Ajouter au panier</p>
        </button>
      </section>
    </div>
  );
}
