export default function GameAdvisor() {
  const filters = {
    genres : "action",
    platforms : "4",
    tags : "single-player",
  };

  const buildQuery = (merguez) => {
    let queryString = ""
    // eslint-disable-next-line guard-for-in, no-restricted-syntax
    for (const filter in filters) {
        queryString += `&${filter}=${merguez[filter]}`;
    }
    return queryString  
  }

  const fetchGames = async () => {
    const queryString = buildQuery(filters);
    const response = await fetch(`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}${queryString}`);
    const data = await response.json();
    console.info(data.results);
  }
  fetchGames()
    return (
    <>
      <h1>J'aime la vie</h1>
      <p>
        Bonjour, voici quelques questions pour vous aider à trouver votre
        prochain jeu.
      </p>
      <p>Sur quelle plateforme souhaitez-vous jouer ?</p>
      <input type="button" value="PC" />
      <input type="button" value="Xbox" />
      <input type="button" value="PlayStation" />
      <input type="button" value="Nintendo" />
      <input type="button" value="Autres" />
      <p>Quel est votre mood du moment ? Plutôt chill ou plutôt on fire ?</p>
      <input type="button" value="Chill" />
      <input type="button" value="On Fire" />
      <p>Parmi ces genres, quels sont vos favoris ?</p>
      <input type="button" value="Chill" />
      <input type="button" value="On Fire" />
      <p>Plutôt jeu indé ou gros studio ? ou peu importe ?</p>
      <input type="button" value="Indé" />
      <input type="button" value="AAA" />
      <input type="button" value="Oui." />
      <p>Solo ou multi ?</p>
      <input type="button" value="solo" />
      <input type="button" value="multi" />
      <p>Quel thème vous parle en ce moment ?</p>
      <input type="button" value="horror" />
      <input type="button" value="sci-fi" />
      <input type="button" value="cartoon" />
      <p>Quelle difficulté recherchez vous ?</p>
      <input type="button" value="On chill" />
      <input type="button" value="Un peu de challenge" />
      <input type="button" value="Git gud" />
      <p>Jeux récents ou jeux classiques ?</p>
      <input type="button" value="Récent" />
      <input type="button" value="Pas récent" />
    </>
  );
}
