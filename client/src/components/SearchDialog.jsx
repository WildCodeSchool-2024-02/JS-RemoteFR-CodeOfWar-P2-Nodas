import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function SearchDialog({ tools }) {
  const [searchString, setSearchString] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearchString(event.target.value);
  };

  const clearSearch = () => {
    setSearchString("");
  };

  const handleSearchClick = () => {
    tools.closeModal();
    navigate(`/catalog/${searchString}`);
  };
  console.info(searchString);
  return (
    <div>
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
              <button type="button" onClick={handleSearchClick}>
                Search
              </button>
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
