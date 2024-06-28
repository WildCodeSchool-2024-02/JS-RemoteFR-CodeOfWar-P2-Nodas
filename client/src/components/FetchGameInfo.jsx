import { useState, useEffect } from "react";
import axios from "axios";
import Gamespages from "./Gamespages";

export default function FetchGameInfo() {
  const [gameInfo, setGameInfo] = useState([]);

  const fetchGameInfo = () => {
    axios
      .get(
        "https://api.rawg.io/api/games/50?key=b3e3b377b29145d293a41aee8c4c64f1"
      )
      .then((response) => {
        setGameInfo(response.data);

        console.info(response.data);
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
      {gameInfo && <Gamespages gameInfo={data} />}
      <button type="button" onClick={fetchGameInfo}>
        api
      </button>
    </>
  );
}
