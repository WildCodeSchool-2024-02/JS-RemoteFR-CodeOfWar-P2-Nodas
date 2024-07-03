import { useLoaderData } from "react-router-dom";

export default function Categories() {
  const genres = useLoaderData();

  return (
    <section className="categories">
      <h2>
        The different type of game<span>:</span>
      </h2>
      <ul>
        {genres.length > 0 ? (
          genres.map((genre) => (
            <li className="genres_list" key={genre.id}>
              {genre.name}
            </li>
          ))
        ) : (
          <li>""</li>
        )}
      </ul>
    </section>
  );
}
