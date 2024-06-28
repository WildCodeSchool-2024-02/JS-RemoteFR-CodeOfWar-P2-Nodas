import CategorieList from "./components/CategorieList";
import NavBar from "./components/NavBar";
import FetchCategorieRecentData from "./components/FetchCategorieRecentData";

const genre = "Action";

function App() {
  const { infosjeu, loading } = FetchCategorieRecentData();

  return (
    <>
      <NavBar />
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <CategorieList Games={infosjeu} genre={genre} />
      )}
    </>
  );
}

export default App;
