export const CARD_FLIPPED = 'CARD_FLIPPED';
export const CARDS_MATCHED = 'CARDS_MATCHED';
export const GAME_FINISHED = 'GAME_FINISHED';
export const GAME_RESET = 'GAME_RESET';
export const NONMATCHED_CARDS_CLOSED = 'NONMATCHED_CARDS_CLOSED';

export function flipCard(card) {
  return {
    type: CARD_FLIPPED,
    payload: card
  };
}

export function matchCards(firstCard, secondCard) {
  return {
    type: CARDS_MATCHED,
    payload: {
      firstCard,
      secondCard
    }
  };
}

export function finishGame() {
  return {
    type: GAME_FINISHED
  };
}

export function resetGame() {
  return {
    type: GAME_RESET
  };
}

export function closeNonMatchedCards() {
  return {
    type: NONMATCHED_CARDS_CLOSED
  };
}
