import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";

export default function SearchDialog({ tools }) {
  const [searchString, setSearchString] = useState("");
  const [gameInfo, setGameInfo] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearchString(event.target.value);
  };

  const clearSearch = () => {
    setSearchString("");
    setGameInfo("");
  };

  const fetchGameInfo = async () => {
    try {
      console.info(searchString);
      const response = await axios.get(
        `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&search=${searchString}`
      );
      setGameInfo(response.data);
      if (response.data.results && response.data.results.length > 0) {
        navigate(`/catalog/${response.data.results[0].name}`);
      } else {
        console.error("No game found");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearchClick = async (event) => {
    event.preventDefault();
    await fetchGameInfo();
    tools.closeModal();
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
              <Link
                to={`/catalog/${gameInfo.name}`}
                onClick={handleSearchClick}
              >
                Search
              </Link>
              <button type="button" onClick={clearSearch}>
                Clear
              </button>
            </div>
          </div>
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
