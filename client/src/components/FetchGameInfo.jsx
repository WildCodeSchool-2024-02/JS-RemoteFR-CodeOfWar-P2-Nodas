import { useState, useEffect } from "react";
import axios from "axios";
import Gamespages from "./Gamespages";

export default function FetchGameInfo() {
  const [gameInfo, setGameInfo] = useState({});
  const [gamePlatforms, setGamePlatforms] = useState([]);

  useEffect(() => {
    fetchGameInfo();
  }, []);

  const fetchGameInfo = () => {
    axios
      .get(
        `https://api.rawg.io/api/games/22?key=${import.meta.env.VITE_API_KEY}`
      )
      .then((response) => {
        setGamePlatforms(response.data.platforms);
        console.log(response.data.platforms);
      });
  };

  const gamePlatformsList = gamePlatforms.map(
    (platform) => platform.platform.name
  );
  console.log(gamePlatformsList);

  return (
    <>
      {gameInfo && (
        <Gamespages gameInfo={gameInfo} platforms={gamePlatformsList} />
      )}

      <button onClick={fetchGameInfo}>Api</button>
    </>
  );
}
