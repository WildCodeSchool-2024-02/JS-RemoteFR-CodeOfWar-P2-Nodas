import axios from "axios";

export function fetchGameInfo() {
  return axios
    .get(
      `https://api.rawg.io/api/games/2050?key=${import.meta.env.VITE_API_KEY}`
    )
    .then((response) => response.data.results)
    .catch((error) => console.error(error));
}

export function fetchData() {
  return axios
    .get(
      `https://api.rawg.io/api/games?dates=2020-01-01,2024-12-01&key=${import.meta.env.VITE_API_KEY}`
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
      "RPG": "role-playing-games-rpg",
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

export function fetchSearchFilters() {
  const promise1 = axios.get(
    `https://api.rawg.io/api/platforms/lists/parents?key=${import.meta.env.VITE_API_KEY}`
  );
  const promise2 = axios.get(
    `https://api.rawg.io/api/genres?key=${import.meta.env.VITE_API_KEY}`
  );
  const promise3 = axios.get(
    `https://api.rawg.io/api/stores?key=${import.meta.env.VITE_API_KEY}`
  );
  return Promise.all([promise1, promise2, promise3])
    .then((response) => response.map((respons) => respons.data.results))
    .catch((error) => console.error(error));
}
