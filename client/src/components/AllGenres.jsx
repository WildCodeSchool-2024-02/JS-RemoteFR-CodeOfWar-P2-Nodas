import { useState, useEffect } from "react";
import axios from "axios";

export default function AllGenres() {
  const [genres, setGenres] = useState([]);
  const getGenres = () => {
    axios
      .get(
        "https://api.rawg.io/api/genres?key=a2e9e0b9273941b887d02a524eeb715c"
      )
      .then((response) => {
        setGenres(response.data.results);
      })
      .catch((error) => console.error(error));
  };
  useEffect (() => {
    getGenres();
  });

  return (<div>
    <h3>Genres</h3>
    {genres.map(genre => (
      <div key={genre.id}>
        <input type="checkbox" id={genre.id} name={genre.name} />
        <label htmlFor={genre.id}>{genre.name}</label>
      </div>
    ))}
  </div>);
}
