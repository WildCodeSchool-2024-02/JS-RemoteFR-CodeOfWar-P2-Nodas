import { useState, useEffect } from "react";
import axios from "axios";

export default function AllPlatforms() {
  const [platforms, setPlatforms] = useState([]);
  const getPlatforms = () => {
    axios
      .get(
        "https://api.rawg.io/api/platforms/lists/parents?key=a2e9e0b9273941b887d02a524eeb715c"
      )
      .then((response) => {
        setPlatforms(response.data.results);
      })
      .catch((error) => console.error(error));
  };
  useEffect (() => {
    getPlatforms();
  });

  return (<div>
    <h3>Plateformes</h3>
    {platforms.map(platform => (
      <div key={platform.id}>
        <input type="checkbox" id={platform.id} name={platform.name} />
        <label htmlFor={platform.id}>{platform.name}</label>
      </div>
    ))}
  </div>);
}
