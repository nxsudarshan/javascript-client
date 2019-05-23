export function getRandomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export function getNextRoundRobin(total, current) {
  return (current + 1) % total;
}
