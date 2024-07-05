import axios from "axios";

export function fetchData() {
  return axios
    .get(
      `https://api.rawg.io/api/games?dates=2020-01-01,2024-12-01&key=${import.meta.env.VITE_API_KEY}`
    )
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
}

export function getRandomGamesFeatured(games, num) {
  const mix = games.sort(() => 0.5 - Math.random());
  return mix.slice(0, num);
}

export function fetchGameById(id) {
  return axios
    .get(
      `https://api.rawg.io/api/games/${id}?key=${import.meta.env.VITE_API_KEY}`
    )
    .then((response) => response.data)
    .catch((error) => console.error(error));
}
