import { useState, useEffect } from "react";
import axios from "axios";
import Gamespages from "./Gamespages";

export default function FetchGameInfo() {
  const [gameInfo, setGameInfo] = useState({});
  const [gameGenres, setGameGenres] = useState([]);

  useEffect(() => {
    fetchGameInfo();
  }, []);

  const fetchGameInfo = () => {
    axios
      .get(
        `https://api.rawg.io/api/games/22?key=${import.meta.env.VITE_API_KEY}`
      )
      .then((response) => {
        setGameGenres(response.data.genres);
      });
  };

  const gameGenresList = gameGenres.map((genre) => genre.name);

  return (
    <>
      {gameInfo && <Gamespages gameInfo={gameInfo} genres={gameGenresList} />}

      <button onClick={fetchGameInfo}>Api</button>
    </>
  );
}
