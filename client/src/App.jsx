import axios from "axios";
import { useState } from "react";
import Gamespages from "./components/Gamespages";

function App() {
  const [gameInfo, setGameInfo] = useState(null);
  const fetchGameInfo = () => {
    axios
      .get(
        "https://api.rawg.io/api/games/3498?key=a2e9e0b9273941b887d02a524eeb715c"
      )
      .then((response) => {
        setGameInfo(response.data);
      });
  };
  return (
    <>
      <nav>blalbalba</nav>
      <Gamespages gameInfo={gameInfo} />
      <button type="button" onClick={fetchGameInfo}>
        api
      </button>
    </>
  );
}

export default App;
