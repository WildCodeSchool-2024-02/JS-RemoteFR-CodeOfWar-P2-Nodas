import { useState, useEffect } from "react";
import axios from "axios";
import Gamespages from "./Gamespages";

export default function FetchGameInfo() {
  const [gameInfo, setGameInfo] = useState({});
  const [paragraphLong, setParagraphLong] = useState(false);
  const fetchGameInfo = () => {
    axios
      .get(
        `https://api.rawg.io/api/games/55?key=${import.meta.env.VITE_API_KEY}`
      )
      .then((response) => {
        setGameInfo(response.data);
      });
  };

  useEffect(() => {
    fetchGameInfo();
  }, []);

  const handleMouseOver = () => {
    setParagraphLong(true);
  };

  const handleMouseOut = () => {
    setParagraphLong(false);
  };

  return (
    <>
      {gameInfo && (
        <Gamespages
          gameInfo={gameInfo}
          paragraphLong={paragraphLong}
          handleMouseOut={handleMouseOut}
          handleMouseOver={handleMouseOver}
        />
      )}

      <button onClick={fetchGameInfo}>Api</button>
    </>
  );
}
