import axios from "axios";
import { useState } from "react";
import CategorieList from "./components/CategorieList";

function App() {
  const [infosjeu, setInfosjeu] = useState([]);
  const fetchData = () => {
    axios
      .get(
        "https://api.rawg.io/api/games/3498?key=528f2e0850a34934a043d35c3ece72a9"
      )
      .then((response) => setInfosjeu(response.data))
      .catch((error) => console.error(error));
  };
  return (
    <>
      <CategorieList List={infosjeu} />
      <button type="button" onClick={fetchData}>
        Cliquer
      </button>
    </>
  );
}

export default App;
