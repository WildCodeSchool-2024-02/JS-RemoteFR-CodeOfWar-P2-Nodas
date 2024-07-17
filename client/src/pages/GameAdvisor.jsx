import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import GameList from "../components/GameList";
import tagsData from "../data/tagsData";

export default function GameAdvisor() {
  const filters = useLoaderData();
  const morefilters = {
    playernumber: tagsData.filter(tag => tag.tagType === 'playernumber'),
    gameplayfeature: tagsData.filter(tag => tag.tagType === 'gameplayfeature'),
    gamingview: tagsData.filter(tag => tag.tagType === 'gamingview'),
    theme: tagsData.filter(tag => tag.tagType === 'theme'),
  };
  // morefilters is an example only, it can be used to add more filters in the future, or fetch them from external sources (tags from api, list of publishers, etc...)

  const [filtersState, setFiltersState] = useState({
    platformFilter: [],
    genreFilter: [],
    storeFilter: [],
    tagsFilter: [],
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
    const { platformFilter, genreFilter, storeFilter, tagsFilter } =
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
    const tagsParams = tagsFilter.length 
      ? `&tags=${tagsFilter.join(",")}` 
      : "";

    return `${baseUrl}?key=${import.meta.env.VITE_API_KEY}${platformParams}${genreParams}${storeParams}${tagsParams}`;
  };

  useEffect(() => {
    const fetchGames = async () => {
      const apiUrl = buildApiRequest();
      console.info("API URL:", apiUrl);
      const response = await fetch(apiUrl);
      const data = await response.json();
      setGames(data.results);
    };

    fetchGames();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filtersState]);

  return (
    <>
    <h1>Game Advisor</h1>
    <p className="advisor-intro">
      Bonjour, voici quelques questions pour vous aider à trouver votre
      prochain jeu.
    </p>
    <div className="advisor-page">
    <div className="filters-container">

      <div className="platform-filters">
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
      </div>
      <div className="genre-filters">
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
      </div>
      <div className="store-filters">
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
      </div>
      <div className="solo-filters">
      <p>Vous avez envie d'une partie en solo ou à plusieurs ?</p>
      {morefilters.playernumber.map((filterItem) => (
        <div key={filterItem.id} className="checkbox-list">
          <input
            type="checkbox"
            id={filterItem.id}
            name={filterItem.name}
            value={filterItem.slug}
            onChange={(e) => handleFilterChange(e, "tagsFilter")}
          />
          <label htmlFor={filterItem.slug}>{filterItem.name}</label>
        </div>
      ))}
      </div>
      <div className="feature-filters">
      <p>Quelles particularités de gameplay vous tentent aujourd'hui ?</p>
      {morefilters.gameplayfeature.map((filterItem) => (
        <div key={filterItem.id} className="checkbox-list">
          <input
            type="checkbox"
            id={filterItem.id}
            name={filterItem.name}
            value={filterItem.slug}
            onChange={(e) => handleFilterChange(e, "tagsFilter")}
          />
          <label htmlFor={filterItem.slug}>{filterItem.name}</label>
        </div>
      ))}
      </div>
      <div className="view-filters">
      <p>La caméra c'est important ! Quel type de vue vous faut-il ?</p>
      {morefilters.gamingview.map((filterItem) => (
        <div key={filterItem.id} className="checkbox-list">
          <input
            type="checkbox"
            id={filterItem.id}
            name={filterItem.name}
            value={filterItem.slug}
            onChange={(e) => handleFilterChange(e, "tagsFilter")}
          />
          <label htmlFor={filterItem.slug}>{filterItem.name}</label>
        </div>
      ))}
      </div>
      <div className="theme-filters">
      <p>Quel thème voulez-vous explorer cette fois ?</p>
      {morefilters.theme.map((filterItem) => (
        <div key={filterItem.id} className="checkbox-list">
          <input
            type="checkbox"
            id={filterItem.id}
            name={filterItem.name}
            value={filterItem.slug}
            onChange={(e) => handleFilterChange(e, "tagsFilter")}
          />
          <label htmlFor={filterItem.slug}>{filterItem.name}</label>
        </div>
      ))}
      </div>
      </div>
      <div className="filter-results-container">
      <GameList games={games} />
      </div>
    </div>
    </>
  );
}
