import { useLoaderData } from "react-router-dom";

export default function Categories() {
  const genres = useLoaderData();

  return (
    <section className="categories">
      <h2>
        Categories<span>:</span>
      </h2>
      <ul className="container_list">
        {genres.length > 0 ? (
          genres.map((genre) => (
            <li className={`genres_list ${genre.name}`} key={genre.id}>
              {genre.name}
            </li>
          ))
        ) : (
          <li>Divers</li>
        )}
      </ul>
    </section>
  );
}
