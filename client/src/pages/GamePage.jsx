import { useLoaderData } from "react-router-dom";

export default function GamePage() {
  const gameInfo = useLoaderData();
  const gameGenres = gameInfo.genres;

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
          <li className="platform xbox">Xbox</li>
          <li className="platform playstation">Playstation</li>
          <li className="platform nintendo">Nintendo Switch</li>
        </ul>
      </section>
      <section className="developers_publishers">
        <div className="developers">
          <h3 className="title_gamepage">
            Publishers<span>:</span>
          </h3>
          <p>CD PROJECT RED</p>
        </div>
        <div className="publishers">
          <h3 className="title_gamepage">
            Developers<span>:</span>
          </h3>
          <p>CD PROJECT RED</p>
        </div>
      </section>
      <section className="like_added">
        <button className="like_button" type="button">
          <img src="./src/assets/images/like.png" alt="like" />
        </button>
        <button className="added_button" type="button">
          <img src="./src/assets/images/loggoCaddie.png" alt="caddie" />
          <p>Ajouter au panier</p>
        </button>
      </section>
    </div>
  );
}
