import { useState, useEffect } from "react";
import axios from "axios";
import Gamespages from "./Gamespages";

export default function FetchGameInfo() {
  const [gameInfo, setGameInfo] = useState([]);
  const [gameGenres, setGameGenres] = useState([]);

  const fetchGameInfo = () => {
    axios
      .get(
        `https://api.rawg.io/api/games/2050?key=${import.meta.env.VITE_API_KEY}`
      )
      .then((response) => {
        setGameInfo(response.data);
        setGameGenres(response.data.genres);
      });
  };

  useEffect(() => {
    fetchGameInfo();
  }, []);

  const gameGenreList = gameGenres.map((genre) => genre.name);

  const data = {
    background_image: gameInfo.background_image,
    name: gameInfo.name,
    metacritic: gameInfo.metacritic,
    description_raw: gameInfo.description_raw,
  };

  return (
    <>
      {gameInfo && <Gamespages gameInfo={data} gameGenres={gameGenreList} />}
      <button type="button" onClick={fetchGameInfo}>
        api
      </button>
    </>
  );
}
