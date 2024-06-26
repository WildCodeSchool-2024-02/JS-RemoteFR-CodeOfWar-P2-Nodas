export default function Gamespages() {
  return (
    <body>
      <img
        className="image_game"
        src="https://fastly.picsum.photos/id/74/4288/2848.jpg?hmac=q02MzzHG23nkhJYRXR-_RgKTr6fpfwRgcXgE0EKvNB8"
        alt="nom du jeu"
      />
      <section className="title_metascore">
        <div className="title_game">
          <h2>CyberPunk 2077</h2>
          <hr />
        </div>
        <div className="metascore">
          <p>4.3</p>
        </div>
      </section>
      <ul className="types_of_game">
        <li>Action</li>
        <li>Adventure</li>
      </ul>
      <section className="description_game">
        <h3>
          Description<span>:</span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
          molestias voluptatibus? Ut ullam ratione, quasi quibusdam aliquam
          iusto minus magnam sed excepturi quod et voluptatem?
        </p>
      </section>
      <section className="platform_game">
        <h3>
          Plateformes<span>:</span>
        </h3>
        <ul className="types_of_platform">
          <li className="platform xbox">Xbox</li>
          <li className="platform playstation">Playstation</li>
          <li className="platform nintendo">Nintendo Switch</li>
        </ul>
      </section>
      <section>
        <div className="developers_publishers">
          <h3>
            Publishers<span>:</span>
          </h3>
          <p>Cd Project red</p>
        </div>
        <div className="developers_publishers">
          <h3>
            Developers<span>:</span>
          </h3>
          <p>Cd Project red</p>
        </div>
      </section>
      <div>
        <img src="#" alt="logo favori" />
        <button type="button">
          <img src="#" alt="logo panier" /> Ajouter au panier
        </button>
      </div>
    </body>
  );
}
