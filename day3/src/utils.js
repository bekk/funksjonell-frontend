export function canFlipCard(card, cards) {
  const countOpenUnmatchedCards = cards
    .reduce((sum, c) => c.open && !c.matched ? sum + 1 : sum, 0);
  return (card.open && !card.matched) ||
    (!card.open && countOpenUnmatchedCards < 2);
}

export function findMatch(card, cards) {
  return cards.find(c =>
    c.id !== card.id &&
    c.item === card.item &&
    c.open &&
    !c.matched
  );
}

export function willMatchFinishGame(cards) {
  const countMatchedCards = cards
    .reduce((sum, card) => card.matched ? sum + 1 : sum, 0);
  return countMatchedCards === cards.length - 2;
}
