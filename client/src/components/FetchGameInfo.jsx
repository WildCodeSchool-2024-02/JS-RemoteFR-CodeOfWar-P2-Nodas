import { useState, useEffect } from "react";
import axios from "axios";
import Gamespages from "./Gamespages";

export default function FetchGameInfo() {
  const [gameGenres, setGameGenres] = useState([]);

  useEffect(() => {
    fetchGameGenres();
  }, []);

  const fetchGameGenres = () => {
    axios
      .get(
        `https://api.rawg.io/api/games/55?key=${import.meta.env.VITE_API_KEY}`
      )
      .then((response) => {
        setGameGenres(response.data.genres);
      });
  };

  const gameGenresList = gameGenres.map((genre) => genre.name);

  return <>{gameGenres && <Gamespages genres={gameGenresList} />}</>;
}
