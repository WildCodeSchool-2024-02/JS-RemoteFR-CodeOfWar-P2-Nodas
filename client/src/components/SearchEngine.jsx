import AllGenres from "./AllGenres";
import AllPlatforms from "./AllPlatforms";
import AllStores from "./AllStores";

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
            <AllGenres />
            <AllPlatforms />
            <AllStores />
        </div>
        <div className="results-container">
            Résultats
        </div>
        </>
    )
}