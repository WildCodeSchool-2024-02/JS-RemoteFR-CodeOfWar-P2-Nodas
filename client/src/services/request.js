import axios from "axios";

export function fetchGameInfo(games) {
  return axios
    .get(
      `https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}&search=${games}`
    )
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
}

export function fetchData() {
  return axios
    .get(
      `https://api.rawg.io/api/games?dates=2018-01-01,2024-12-01&key=${import.meta.env.VITE_API_KEY}`
    )
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
}

export function fetchCategories() {
  return axios
    .get(`https://api.rawg.io/api/genres?key=${import.meta.env.VITE_API_KEY}`)
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
}

export function fetchSelectedGenre(genres) {
  const genreReader = (genre) => {
    const genreName = {
      RPG: "role-playing-games-rpg",
      "Massively Multiplayer": "massively-multiplayer",
      "Board Games": "board-games",
    };
    return genreName[genre] || genre.toLowerCase();
  };
  return axios
    .get(
      `https://api.rawg.io/api/games?genres=${genreReader(genres)}&key=${import.meta.env.VITE_API_KEY}`
    )
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
}

export function fetchGameById(id) {
  return axios
    .get(
      `https://api.rawg.io/api/games/${id}?key=${import.meta.env.VITE_API_KEY}`
    )
    .then((response) => response.data)
    .catch((error) => console.error(error));
}

export function fetchPlatforms() {
  return axios
    .get(
      `https://api.rawg.io/api/platforms?key=${import.meta.env.VITE_API_KEY}`
    )
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
}
