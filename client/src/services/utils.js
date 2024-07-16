export default function getPopularGames(games, count) {
  const sortedGames = games.sort((a, b) => b.metacritic - a.metacritic);
  return sortedGames.slice(0, count);
}
