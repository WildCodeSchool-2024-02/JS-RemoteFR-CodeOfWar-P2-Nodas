import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import FavoriteContext from "../contexts/FavoriteContext";

export default function GamePage() {
  const gameInfo = useLoaderData();
  const gameGenres = gameInfo.genres;
  const gamePlatforms = gameInfo.platforms;
  const gamePublishers = gameInfo.publishers;

  const { favoris, setFavoris } = useContext(FavoriteContext);

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
    <div>
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
        <p>{gameInfo.description_raw}</p>
      </section>
      <section className="platform_game">
        <h3 className="title_gamepage">
          Plateformes<span>:</span>
        </h3>
        <ul className="types_of_platform">
          {gamePlatforms.length > 0 ? (
            gamePlatforms.map((platform) => (
              <li key={platform.id}>{platform.platform.name}</li>
            ))
          ) : (
            <li>Divers Plateforme</li>
          )}
        </ul>
      </section>
      <section className="developers_publishers">
        <div className="developers">
          <h3 className="title_gamepage">
            Publishers<span>:</span>
          </h3>
          {gamePublishers.length > 0 ? (
            gamePublishers.map((publisher) => (
              <p key={publisher.id} className="publisher">
                {publisher.name}
              </p>
            ))
          ) : (
            <p>Inconnu</p>
          )}
        </div>
        <div className="publishers">
          <h3 className="title_gamepage">
            Developers<span>:</span>
          </h3>
          <p>CD PROJECT RED</p>
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
