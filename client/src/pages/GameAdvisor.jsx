import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import GameList from "../components/GameList";
import tagsData from "../data/tagsData";
import FilterItem from "../components/FilterItem";
import Collapsable from "../components/Collapsable";

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
    <div className="advisor-page">
      <div className="filters-side">
        <div className="advisor-intro">
          <h1>Game Advisor</h1>
          <p>
            Bonjour, voici quelques questions pour vous aider à trouver votre
            prochain jeu. Amusez vous bien !
          </p>
        </div>
        <div className="separation" />
        <div className="filters-container">
          <Collapsable title="Sur quelle(s) plateforme(s) avez-vous l'habitude de jouer ?">
            <FilterItem
              filters={filters[0]}
              onChange={(e) => handleFilterChange(e, "platformFilter")}
            />
          </Collapsable>
          <Collapsable title="Quels sont vos genres de jeux préférés ?">
            <FilterItem
              filters={filters[1]}
              onChange={(e) => handleFilterChange(e, "genreFilter")}
            />
          </Collapsable>

          <Collapsable title="Quel thème voulez-vous explorer cette fois ?">
            <FilterItem
              filters={morefilters.theme}
              onChange={(e) => handleFilterChange(e, "tagsFilter")}
            />
          </Collapsable>

          <Collapsable title="Quelles particularités de gameplay vous tentent aujourd'hui ?">
            <FilterItem
              filters={morefilters.gameplayfeature}
              onChange={(e) => handleFilterChange(e, "tagsFilter")}
            />
          </Collapsable>
          <Collapsable title="La caméra c'est important ! Quel type de vue vous faut-il ?">
            <FilterItem
              filters={morefilters.gamingview}
              onChange={(e) => handleFilterChange(e, "tagsFilter")}
            />
          </Collapsable>
          <Collapsable title="Vous avez envie d'une partie en solo ou à plusieurs ?">
            <FilterItem
              filters={morefilters.playernumber}
              onChange={(e) => handleFilterChange(e, "tagsFilter")}
            />
          </Collapsable>
          <Collapsable title="Avez-vous une préférence pour un shop en ligne ?">
            <FilterItem
              filters={filters[2]}
              onChange={(e) => handleFilterChange(e, "storeFilter")}
            />
          </Collapsable>
        </div>
      </div>
      <div className="results-side">
        <GameList games={games} />
      </div>
    </div>
  );
}
