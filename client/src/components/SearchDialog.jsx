import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

export default function SearchDialog({ tools }) {
  const [searchString, setSearchString] = useState("");
  const [gameInfo, setGameInfo] = useState(null);
  console.info(gameInfo);
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
        <h2 className="search-dialog-title">Recherche</h2>
        <div className="input_search_container">
          <div>
            <input
              type="text"
              value={searchString}
              onChange={handleChange}
              className="input-search"
            />
            <div className="search-buttons">
              <Link to="/catalog" onClick={fetchGameInfo}>
                Search
              </Link>
              <button type="button" onClick={clearSearch}>
                Clear
              </button>
            </div>
          </div>
          {/* <div className="results">
            {gameInfo ? <Catalogue gameInfo={gameInfo} tools={tools} /> : ""}
          </div> */}

          <button
            className="close_dialog"
            type="button"
            onClick={tools.closeModal}
          >
            Fermer la fenêtre
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
