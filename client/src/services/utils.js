export function getShortPopularGames(games, count) {
  const sortedGames = games.sort((a, b) => b.metacritic - a.metacritic);
  return sortedGames.slice(0, count);
}

export function getShortRandomGames(games, count) {
  const mixGames = games.sort(() => Math.random() - 0.5);
  return mixGames.slice(0, count);
}
