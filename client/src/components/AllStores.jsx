import { useState, useEffect } from "react";
import axios from "axios";

export default function AllStores() {
  const [stores, setStores] = useState([]);
  const getStores = () => {
    axios
      .get(
        "https://api.rawg.io/api/stores?key=a2e9e0b9273941b887d02a524eeb715c"
      )
      .then((response) => {
        setStores(response.data.results);
      })
      .catch((error) => console.error(error));
  };
  useEffect (() => {
    getStores();
  });

  return (<div>
    <h3>Stores</h3>
    {stores.map(store => (
      <div key={store.id}>
        <input type="checkbox" id={store.id} name={store.name} />
        <label htmlFor={store.id}>{store.name}</label>
      </div>
    ))}
  </div>);
}
