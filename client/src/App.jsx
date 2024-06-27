import axios from "axios";
import { useState } from "react";
import CategorieList from "./components/CategorieList";

const genre = "Action";

function App() {
  const [infosjeu, setInfosjeu] = useState([]);
  const fetchData = () => {
    axios
      .get("https://api.rawg.io/api/games?key=528f2e0850a34934a043d35c3ece72a9")
      .then((response) => setInfosjeu(response.data.results))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <CategorieList List={infosjeu} genre={genre} />
      <button type="button" onClick={fetchData}>
        Cliquer
      </button>
    </>
  );
}

export default App;
