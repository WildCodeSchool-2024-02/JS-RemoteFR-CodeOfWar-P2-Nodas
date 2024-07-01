import CategorieList from "./components/CategorieList";
import NavBar from "./components/NavBar";
import FetchGameInfo from "./components/FetchGameInfo";
import FetchCategorieRecentData from "./components/FetchCategorieRecentData";

function App() {
  const { infosjeu, loading } = FetchCategorieRecentData();
  
  const genre = "Action";

  return (
    <>
      <NavBar />
      <FetchGameInfo />
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <CategorieList Games={infosjeu} genre={genre} />
      )}
    </>
  );
}

export default App;
