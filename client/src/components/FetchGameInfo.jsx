import { useState } from "react";
import axios from "axios";
import Gamespages from "./Gamespages";

export default function FetchGameInfo() {
  const [gameInfo, setGameInfo] = useState({});
  const fetchGameInfo = () => {
    axios
      .get(
        `https://api.rawg.io/api/games/5?key=${import.meta.env.VITE_API_KEY}`
      )
      .then((response) => {
        setGameInfo(response.data);
      });
  };

  return (
    <>
      {gameInfo && <Gamespages gameInfo={gameInfo} />}

      <button onClick={fetchGameInfo}>Api</button>
    </>
  );
}
