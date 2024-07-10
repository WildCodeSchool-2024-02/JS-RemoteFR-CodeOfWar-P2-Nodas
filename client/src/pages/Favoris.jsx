import { useContext } from "react";
import FavorisItem from "../components/FavorisItem";
import FavoriteContext from "../contexts/FavoriteContext";

function Favoris() {
  const {favoris} = useContext(FavoriteContext)
  
  return (

      <section>
        <h2>Favoris</h2>
        {favoris.map((id, index) => (
          <FavorisItem
            key={[index]}
            id={id}
          />
        ))}
      </section>
  );
}

export default Favoris;
