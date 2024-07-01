import { useState, useEffect } from "react";
import axios from "axios";
import Gamespages from "./Gamespages";

export default function FetchGameInfo() {
  const [gameInfo, setGameInfo] = useState([]);
  const [gamePlatforms, setGamePlatforms] = useState([]);

  const fetchGameInfo = () => {
    axios
      .get(
        `https://api.rawg.io/api/games/50?key=${import.meta.env.VITE_API_KEY}`
      )
      .then((response) => {
        setGameInfo(response.data);
        setGamePlatforms(response.data.platforms);
        console.info(response.data.platforms);
      });
  };

  useEffect(() => {
    fetchGameInfo();
  }, []);

  const gamePlatformList = gamePlatforms.map((platform)=>platform.platform.name);
  const data = {
    background_image: gameInfo.background_image,
    name: gameInfo.name,
    metacritic: gameInfo.metacritic,
    description_raw: gameInfo.description_raw,
    genres: gameInfo.genres,
  };

  return (
    <>
      {gameInfo && <Gamespages gameInfo={data} gamePlatforms={gamePlatformList}/>}
      <button type="button" onClick={fetchGameInfo}>
        api
      </button>
    </>
  );
}
