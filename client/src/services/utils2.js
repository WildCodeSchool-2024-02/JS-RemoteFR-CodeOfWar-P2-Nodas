export default function getRandomGames(games, count) {
  const mixGames = games.sort(() => Math.random() - 0.5);
  return mixGames.slice(0, count);
}
