import { useState } from "react";
import axios from "axios";
import Gamespages from "./Gamespages";

export default function FetchGameInfo() {
  const [gameInfo, setGameInfo] = useState({});
  const fetchGameInfo = () => {
    axios
      .get(
        `https://api.rawg.io/api/games/2000?key=${import.meta.env.VITE_API_KEY}`
      )
      .then((response) => {
        setGameInfo(response.data);
      });
  };
  return (
    <>
      <Gamespages gameInfo={gameInfo} />
      <button onClick={fetchGameInfo}>Api</button>
    </>
  );
}
