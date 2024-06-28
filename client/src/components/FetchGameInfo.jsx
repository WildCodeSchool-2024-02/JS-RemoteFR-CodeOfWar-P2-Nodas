import { useState } from "react";
import Gamespages from "./Gamespages";

export default function FetchGameInfo() {
  const [gameInfo, setGameInfo] = useState({});
  return <Gamespages gameInfo={gameInfo} />;
}
