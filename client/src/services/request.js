import axios from "axios";

export function fetchGameInfo() {
  return axios
    .get(
      `https://api.rawg.io/api/games/2050?key=${import.meta.env.VITE_API_KEY}`
    )
    .then((response) => response.data)
    .catch((error) => console.error(error));
}

export function fetchData() {
  return axios
    .get(
      `https://api.rawg.io/api/games?dates=2020-01-01,2021-01-01&key=${import.meta.env.VITE_API_KEY}`
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
  return axios
    .get(
      `https://api.rawg.io/api/games?genres=${genres !== "RPG" ? genres.toLowerCase() : "role-playing-games-rpg"}&key=${import.meta.env.VITE_API_KEY}`
    )
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
}
