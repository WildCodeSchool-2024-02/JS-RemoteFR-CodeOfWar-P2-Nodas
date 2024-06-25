import { useState } from "react";
import axios from "axios";
import TestImages from "./TestImages";

function App() {
  const [picpic, setPicpic] = useState("toto");
  const getPicpic = () => {
    axios
      .get("https://api.rawg.io/api/games?key=a2e9e0b9273941b887d02a524eeb715c")
      .then((response) => {
        setPicpic(response.data.results[1]);
      });
  };

  return (
    <>
      <h1>{picpic.name}</h1>;
      <button type="button" onClick={getPicpic}>
        Game
      </button>
      <TestImages tata={picpic} />
    </>
  );
}

export default App;
