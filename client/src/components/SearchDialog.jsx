import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Catalogue from "../pages/Catalogue";

export default function SearchDialog({ tools }) {
  const [searchString, setSearchString] = useState("");
  const [gameInfo, setGameInfo] = useState(null);

  const handleChange = (event) => {
    setSearchString(event.target.value);
  };

  const clearSearch = () => {
    setSearchString("");
    setGameInfo(null);
  };

  const fetchGameInfo = () => {
    const searchStringSlug = searchString.toLowerCase().replace(/ /g, "-");
    axios
      .get(
        `https://api.rawg.io/api/games/${searchStringSlug}?key=${import.meta.env.VITE_API_KEY}`
      )
      .then((response) => setGameInfo(response.data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="merguez">
      <dialog id="modal" ref={tools.modalRef}>
        <div className="input_search">
          <div>
            <input type="text" value={searchString} onChange={handleChange} />
            <button type="button" onClick={fetchGameInfo}>
              Search
            </button>
            <button type="button" onClick={clearSearch}>
              Clear
            </button>
          </div>
          <div className="results">
            {gameInfo ? <Catalogue gameInfo={gameInfo} tools={tools} /> : ""}
          </div>
          <button type="button" onClick={tools.closeModal}>
            close dialog
          </button>
        </div>
      </dialog>
    </div>
  );
}

SearchDialog.propTypes = {
  tools: PropTypes.shape({
    closeModal: PropTypes.func.isRequired,
    modalRef: PropTypes.shape({
      current: PropTypes.instanceOf(Element),
    }).isRequired,
  }).isRequired,
};
