export function getShortPopularGames(games, count) {
  const sortedGames = games.sort((a, b) => b.metacritic - a.metacritic);
  return sortedGames.slice(0, count);
}

export function getShortRandomGames(games, count) {
  const mixGames = games.sort(() => Math.random() - 0.5);
  return mixGames.slice(0, count);
}

export function getRandomPrice() {
  const min = 30;
  const max = 60;
  const randomPrice = Math.random() * (max - min) + min;
  return randomPrice.toFixed(2);
}

export function getMetacriticClass(initialScore) {
  const score = initialScore;

  if (score === null) {
    return "grey";
  }

  if (score >= 75) {
    return "green";
  }
  if (score >= 50) {
    return "orange";
  }
  return "red";
}
