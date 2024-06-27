import axios from "axios";
import { useState, useEffect } from "react";
import Gamespages from "./components/Gamespages";

function App() {
  const [gameInfo, setGameInfo] = useState([]);

  const fetchGameInfo = () => {
    axios
      .get(
        "https://api.rawg.io/api/games/3498?key=a2e9e0b9273941b887d02a524eeb715c"
      )
      .then((response) => {
        setGameInfo(response.data);

        console.info(response.data.genres);
      });
  };

  useEffect(() => {
    fetchGameInfo();
  }, []);

  const data = {
    background_image: gameInfo.background_image,
    name: gameInfo.name,
    metacritic: gameInfo.metacritic,
    description_raw: gameInfo.description_raw,
    genres: gameInfo.genres,
  };

  return (
    <>
      <nav>blalbalba</nav>
      {gameInfo && <Gamespages gameInfo={data} />}
      <button type="button" onClick={fetchGameInfo}>
        api
      </button>
    </>
  );
}

export default App;
