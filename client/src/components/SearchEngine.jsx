import AllGenres from "./AllGenres";

export default function SearchEngine() {
    return (
        <>
        <div>
            <h2>Nodas Search Engine</h2>
            <p>9999 games available for browsing</p>
            <div className="search-bar">
                SearchBar
            </div>
        </div>
        <div className="filters-container">
            <p>Filters</p>
            <div>
            <input type="text" className="prix-min" />
            <input type="text" className="prix-max" />
            </div>
            <div>
            <h3>Genres</h3>
            <AllGenres />
            </div>
            <div>
                <h3>Platforms</h3>
            <input type="checkbox" name="Platforme" id="1" />
            <input type="checkbox" name="Platforme" id="2" />
            <input type="checkbox" name="Platforme" id="3" />
            <input type="checkbox" name="Platforme" id="4" />
            <input type="checkbox" name="Platforme" id="5" />
            <input type="checkbox" name="Platforme" id="6" />
            <input type="checkbox" name="Platforme" id="7" />
            <input type="checkbox" name="Platforme" id="8" />
            <input type="checkbox" name="Platforme" id="9" />
            <input type="checkbox" name="Platforme" id="10" />
            <input type="checkbox" name="Platforme" id="11" />
            <input type="checkbox" name="Platforme" id="12" />
            <input type="checkbox" name="Platforme" id="13" />
            <input type="checkbox" name="Platforme" id="14" />
            </div>
            <div>
                <h3>Stores</h3>
            <input type="checkbox" name="Store" id="1" />
            <input type="checkbox" name="Store" id="2" />
            <input type="checkbox" name="Store" id="3" />
            <input type="checkbox" name="Store" id="4" />
            <input type="checkbox" name="Store" id="5" />
            <input type="checkbox" name="Store" id="6" />
            <input type="checkbox" name="Store" id="7" />
            <input type="checkbox" name="Store" id="8" />
            <input type="checkbox" name="Store" id="9" />
            <input type="checkbox" name="Store" id="10" />
            </div>
        </div>
        <div className="results-container">
            Résultats
        </div>
        </>
    )
}