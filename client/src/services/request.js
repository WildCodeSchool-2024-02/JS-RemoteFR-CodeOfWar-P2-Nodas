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

export function fetchGameById(id) {
  return axios
    .get(
      `https://api.rawg.io/api/games/${id}?key=${import.meta.env.VITE_API_KEY}`
    )
    .then((response) => response.data)
    .catch((error) => console.error(error));
}

export function fetchGenresByGameId(id)
{
  return axios
    .get(
      `https://api.rawg.io/api/games/${id}?key=${import.meta.env.VITE_API_KEY}`
    )
    .then((response) => response.data.genres)
    .catch((error) => console.error(error));
}