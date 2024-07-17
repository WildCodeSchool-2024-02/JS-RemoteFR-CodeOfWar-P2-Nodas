import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import GameList from "../components/GameList";
import tagsData from "../data/tagsData";

export default function GameAdvisor() {
  const filters = useLoaderData();
  const morefilters = tagsData
  // Example only, can be used to add more filters in the future, or fetch them from external sources (tags from api, list of publishers, etc...)
 

  const [filtersState, setFiltersState] = useState({
    platformFilter: [],
    genreFilter: [],
    storeFilter: [],
    soloFilter: [],
  });

  const [games, setGames] = useState([]);

  const handleFilterChange = (event, filterType) => {
    const { value, type, checked } = event.target;
    setFiltersState((prevState) => {
      let updatedFilter;
      if (type === "checkbox") {
        if (checked) {
          updatedFilter = [...prevState[filterType], value];
        } else {
          updatedFilter = prevState[filterType].filter(
            (item) => item !== value
          );
        }
      } else {
        updatedFilter = value;
      }
      return {
        ...prevState,
        [filterType]: updatedFilter,
      };
    });
  };

  const buildApiRequest = () => {
    const baseUrl = "https://api.rawg.io/api/games";
    const { platformFilter, genreFilter, storeFilter, soloFilter } =
      filtersState;

    const platformParams = platformFilter.length
      ? `&parent_platforms=${platformFilter.join(",")}`
      : "";
    const genreParams = genreFilter.length
      ? `&genres=${genreFilter.join(",")}`
      : "";
    const storeParams = storeFilter.length
      ? `&stores=${storeFilter.join(",")}`
      : "";
    const soloParams = soloFilter.length ? `&tags=${soloFilter.join(",")}` : "";

    return `${baseUrl}?key=${import.meta.env.VITE_API_KEY}${platformParams}${genreParams}${storeParams}${soloParams}`;
  };

  useEffect(() => {
    const fetchGames = async () => {
      const apiUrl = buildApiRequest();
      console.info('API URL:', apiUrl);
      const response = await fetch(apiUrl);
      const data = await response.json();
      setGames(data.results);
    };

    fetchGames();
  }, [filtersState]);

  return (
    <>
      <h1>J'aime la vie</h1>
      <p>
        Bonjour, voici quelques questions pour vous aider à trouver votre
        prochain jeu.
      </p>
      <p>Sur quelle plateforme avez-vous l'habitude de jouer ?</p>
      {filters[0].map((filterItem) => (
        <div key={filterItem.id} className="checkbox-list">
          <input
            type="checkbox"
            id={filterItem.id}
            name={filterItem.name}
            value={filterItem.id}
            onChange={(e) => handleFilterChange(e, "platformFilter")}
          />
          <label htmlFor={filterItem.id}>{filterItem.name}</label>
        </div>
      ))}
      <p>Quels sont vos genres de jeux préférés ?</p>
      {filters[1].map((filterItem) => (
        <div key={filterItem.id} className="checkbox-list">
          <input
            type="checkbox"
            id={filterItem.id}
            name={filterItem.name}
            value={filterItem.slug}
            onChange={(e) => handleFilterChange(e, "genreFilter")}
          />
          <label htmlFor={filterItem.slug}>{filterItem.name}</label>
        </div>
      ))}
      <p>Avez-vous une préférence pour un shop en ligne ?</p>
      {filters[2].map((filterItem) => (
        <div key={filterItem.id} className="checkbox-list">
          <input
            type="checkbox"
            id={filterItem.id}
            name={filterItem.name}
            value={filterItem.id}
            onChange={(e) => handleFilterChange(e, "storeFilter")}
          />
          <label htmlFor={filterItem.slug}>{filterItem.name}</label>
        </div>
      ))}
      <p>Des tags spécifiques qui vous intéressent ?</p>
      {morefilters.map((filterItem) => (
        <div key={filterItem.id} className="checkbox-list">
          <input
            type="checkbox"
            id={filterItem.id}
            name={filterItem.name}
            value={filterItem.slug}
            onChange={(e) => handleFilterChange(e, "soloFilter")}
          />
          <label htmlFor={filterItem.slug}>{filterItem.name}</label>
        </div>
      ))}
      <GameList games={games} />
    </>
  );
}
