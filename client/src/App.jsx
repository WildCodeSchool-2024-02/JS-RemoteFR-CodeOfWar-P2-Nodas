import axios from "axios";
import { useState } from "react";
import CategorieList from "./components/CategorieList";

const genre = "Action";

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const previousMonth = String(today.getMonth()).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");
const oldMonthFormattedDate = `${year}-${previousMonth}-${day}`;
const formattedDate = `${year}-${month}-${day}`;

function App() {
  const [infosjeu, setInfosjeu] = useState([]);
  const fetchCategorieRecentData = () => {
    axios
      .get(
        `https://api.rawg.io/api/games?dates=${oldMonthFormattedDate},${formattedDate}&key=528f2e0850a34934a043d35c3ece72a9`
      )
      .then((response) => setInfosjeu(response.data.results))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <CategorieList Games={infosjeu} genre={genre} />
      <button type="button" onClick={fetchCategorieRecentData}>
        Cliquer
      </button>
    </>
  );
}

export default App;
