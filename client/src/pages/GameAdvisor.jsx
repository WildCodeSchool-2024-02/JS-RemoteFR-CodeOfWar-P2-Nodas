import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import GameList from "../components/GameList";
import tagsData from "../data/tagsData";
import FilterItem from "../components/FilterItem";

export default function GameAdvisor() {
  const filters = useLoaderData();
  const morefilters = {
    playernumber: tagsData.filter((tag) => tag.tagType === "playernumber"),
    gameplayfeature: tagsData.filter(
      (tag) => tag.tagType === "gameplayfeature"
    ),
    gamingview: tagsData.filter((tag) => tag.tagType === "gamingview"),
    theme: tagsData.filter((tag) => tag.tagType === "theme"),
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
    const tagsParams = tagsFilter.length ? `&tags=${tagsFilter.join(",")}` : "";

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
          <FilterItem
            title="Sur quelle plateforme avez-vous l'habitude de jouer ?"
            filters={filters[0]}
            onChange={(e) => handleFilterChange(e, "platformFilter")}
          />
          <FilterItem
            title="Quels sont vos genres de jeux préférés ?"
            filters={filters[1]}
            onChange={(e) => handleFilterChange(e, "genreFilter")}
          />
          <FilterItem
            title="Avez-vous une préférence pour un shop en ligne ?"
            filters={filters[2]}
            onChange={(e) => handleFilterChange(e, "storeFilter")}
          />
          <FilterItem
            title="Vous avez envie d'une partie en solo ou à plusieurs ?"
            filters={morefilters.playernumber}
            onChange={(e) => handleFilterChange(e, "tagsFilter")}
          />
          <FilterItem
            title="Quelles particularités de gameplay vous tentent aujourd'hui ?"
            filters={morefilters.gameplayfeature}
            onChange={(e) => handleFilterChange(e, "tagsFilter")}
          />
          <FilterItem
            title="La caméra c'est important ! Quel type de vue vous faut-il ?"
            filters={morefilters.gamingview}
            onChange={(e) => handleFilterChange(e, "tagsFilter")}
          />
          <FilterItem
            title="Quel thème voulez-vous explorer cette fois ?"
            filters={morefilters.theme}
            onChange={(e) => handleFilterChange(e, "tagsFilter")}
          />
        </div>
        <div className="filter-results-container">
          <GameList games={games} />
        </div>
      </div>
    </>
  );
}
